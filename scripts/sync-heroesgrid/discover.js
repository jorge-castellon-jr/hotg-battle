#!/usr/bin/env node
/**
 * Discovery script: compare HeroesGrid data/export with hotg-battle DB
 * and report missing rangers, missing enemies (including nemesis), and deck diffs.
 *
 * Usage: node scripts/sync-heroesgrid/discover.js [HEROESGRID_EXPORT_PATH]
 * Or:   HEROESGRID_EXPORT=/path/to/HeroesGrid/apps/web/data/export node scripts/sync-heroesgrid/discover.js
 */

const fs = require('fs');
const path = require('path');

// Sibling repo: from hotg-battle root, HeroesGrid is ../HeroesGrid (or ../heroes-grid)
const HG_PATH = process.env.HEROESGRID_EXPORT || process.argv[2] || path.join(__dirname, '../../../HeroesGrid/apps/web/data/export');
const HOTG_ROOT = path.join(__dirname, '../..');

function loadJson(file) {
  const p = path.join(HG_PATH, file);
  if (!fs.existsSync(p)) {
    console.warn('Missing:', p);
    return null;
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function getHotgRangerOwners() {
  const owners = new Set();
  const indexFiles = [
    'packages/app/features/game/DB/rangers/index.ts',
    'packages/app/features/game/DB/MightyMorphin/index.ts',
    'packages/app/features/game/DB/Zeo/index.ts',
  ];
  for (const file of indexFiles) {
    const content = fs.readFileSync(path.join(HOTG_ROOT, file), 'utf8');
    const re = /import\s+(\w+)\s+from\s+['"]/g;
    let m;
    while ((m = re.exec(content)) !== null) {
      owners.add(m[1]);
    }
  }
  return owners;
}

function getHotgEnemyOwners() {
  const owners = [];
  const files = [
    'packages/app/features/game/DB/Enemies/FootSoldiers/index.ts',
    'packages/app/features/game/DB/Enemies/Monsters/index.ts',
    'packages/app/features/game/DB/Enemies/Bosses/index.ts',
  ];
  const idRe = /id:\s*['"]([^'"]+)['"]/g;
  for (const file of files) {
    const content = fs.readFileSync(path.join(HOTG_ROOT, file), 'utf8');
    let m;
    while ((m = idRe.exec(content)) !== null) {
      owners.push(m[1]);
    }
  }
  return owners;
}

function slugToSnake(slug) {
  return (slug || '').replace(/-/g, '_');
}

function main() {
  console.log('HeroesGrid export path:', HG_PATH);
  console.log('hotg-battle root:', HOTG_ROOT);
  if (!fs.existsSync(HG_PATH)) {
    console.error('HeroesGrid export path does not exist. Set HEROESGRID_EXPORT or pass path as first arg.');
    process.exit(1);
  }

  const rangers = loadJson('rangers.json');
  const rangerCards = loadJson('ranger_cards.json');
  const cards = loadJson('cards.json');
  const enemies = loadJson('enemies.json');
  const teams = loadJson('teams.json');

  if (!rangers || !enemies) {
    console.error('Required files rangers.json and enemies.json not found.');
    process.exit(1);
  }

  const hotgRangerOwners = getHotgRangerOwners();
  const hotgEnemyOwners = new Set(getHotgEnemyOwners());

  const cardById = new Map();
  if (rangerCards) rangerCards.forEach((c) => cardById.set(String(c.id), c));
  if (cards) cards.forEach((c) => cardById.set(String(c.id), c));

  const teamById = new Map();
  if (teams) teams.forEach((t) => teamById.set(String(t.id), t));

  // --- Rangers ---
  const missingRangers = [];
  const matchingRangers = [];
  for (const r of rangers) {
    const slugSnake = slugToSnake(r.slug);
    const matched = hotgRangerOwners.has(slugSnake) || hotgRangerOwners.has(r.slug);
    if (!matched) {
      missingRangers.push({
        slug: r.slug,
        slugSnake,
        name: r.name,
        title: r.title,
        team_id: r.team_id,
        color: r.color,
      });
    } else {
      matchingRangers.push({ slug: r.slug, slugSnake, deck: r.deck, name: r.name, title: r.title });
    }
  }

  // Deck diff for matching rangers (compare card names + counts)
  const deckDiffs = [];
  for (const r of matchingRangers) {
    const hotgDeckPath = [
      path.join(HOTG_ROOT, 'packages/app/features/game/DB/rangers', r.slugSnake + '.ts'),
      path.join(HOTG_ROOT, 'packages/app/features/game/DB/MightyMorphin', r.slugSnake + '.ts'),
      path.join(HOTG_ROOT, 'packages/app/features/game/DB/Zeo', r.slugSnake + '.ts'),
    ].find((p) => fs.existsSync(p));
    if (!hotgDeckPath || !r.deck) continue;
    const hotgContent = fs.readFileSync(hotgDeckPath, 'utf8');
    const hotgCardCounts = {};
    const nameRe = /name:\s*['"]([^'"]+)['"]/g;
    let m;
    while ((m = nameRe.exec(hotgContent)) !== null) {
      const name = m[1];
      hotgCardCounts[name] = (hotgCardCounts[name] || 0) + 1;
    }
    const hgCardCounts = {};
    for (const d of r.deck) {
      const cardName = d.card_name || (cardById.get(String(d.card_id)) && cardById.get(String(d.card_id)).name) || '?';
      hgCardCounts[cardName] = (hgCardCounts[cardName] || 0) + (d.count || 1);
    }
    const allNames = new Set([...Object.keys(hotgCardCounts), ...Object.keys(hgCardCounts)]);
    const diffs = [];
    for (const name of allNames) {
      const hg = hgCardCounts[name] || 0;
      const hotg = hotgCardCounts[name] || 0;
      if (hg !== hotg) diffs.push({ name, hg, hotg });
    }
    if (diffs.length) deckDiffs.push({ slug: r.slug, slugSnake: r.slugSnake, diffs });
  }

  // --- Enemies (foot, monster, boss, nemesis) ---
  const missingEnemies = [];
  for (const e of enemies) {
    const slug = e.slug || e.name?.toLowerCase().replace(/\s+/g, '_') || String(e.id);
    const ownerId = slugToSnake(slug);
    const matched = hotgEnemyOwners.has(ownerId) || hotgEnemyOwners.has(slug);
    if (!matched) {
      missingEnemies.push({
        id: e.id,
        slug: e.slug,
        name: e.name,
        monster_type: e.monster_type,
        nemesis_effect: e.nemesis_effect || null,
        ownerId,
      });
    }
  }

  // --- Report ---
  const report = {
    heroesGridPath: HG_PATH,
    hotgRangerOwnerCount: hotgRangerOwners.size,
    hotgEnemyOwnerCount: hotgEnemyOwners.size,
    hgRangerCount: rangers.length,
    hgEnemyCount: enemies.length,
    missingRangersCount: missingRangers.length,
    missingEnemiesCount: missingEnemies.length,
    deckDiffsCount: deckDiffs.length,
    missingRangers: missingRangers.slice(0, 50),
    missingRangersAllSlugs: missingRangers.map((r) => r.slug),
    missingEnemies: missingEnemies,
    missingEnemiesByType: {
      foot: missingEnemies.filter((e) => (e.monster_type || '').toLowerCase() === 'foot').length,
      monster: missingEnemies.filter((e) => (e.monster_type || '').toLowerCase() === 'monster').length,
      boss: missingEnemies.filter((e) => (e.monster_type || '').toLowerCase() === 'boss').length,
      nemesis: missingEnemies.filter((e) => (e.monster_type || '').toLowerCase() === 'nemesis').length,
    },
    deckDiffs: deckDiffs.slice(0, 20),
  };

  const reportPath = path.join(HOTG_ROOT, 'scripts/sync-heroesgrid/discovery-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('\n--- Discovery report ---');
  console.log('HG rangers:', rangers.length, '| hotg ranger decks:', hotgRangerOwners.size);
  console.log('Missing rangers:', missingRangers.length);
  console.log('HG enemies:', enemies.length, '| hotg enemy decks:', hotgEnemyOwners.size);
  console.log('Missing enemies:', missingEnemies.length, '(foot:', report.missingEnemiesByType.foot, 'monster:', report.missingEnemiesByType.monster, 'boss:', report.missingEnemiesByType.boss, 'nemesis:', report.missingEnemiesByType.nemesis, ')');
  console.log('Deck diffs (matching rangers with different deck):', deckDiffs.length);
  console.log('Full report written to:', reportPath);
}

main();
