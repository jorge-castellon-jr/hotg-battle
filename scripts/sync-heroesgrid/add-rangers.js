#!/usr/bin/env node
/**
 * Generate missing ranger deck files and register in Rangers.ts.
 * Run after discover.js. Uses HEROESGRID_EXPORT or first CLI arg.
 */

const fs = require('fs');
const path = require('path');
const { convertHgRangerCard } = require('./convert.js');

// Sibling repo: from hotg-battle root, HeroesGrid is ../HeroesGrid
const HG_PATH = process.env.HEROESGRID_EXPORT || process.argv[2] || path.join(__dirname, '../../../HeroesGrid/apps/web/data/export');
const HOTG_ROOT = path.join(__dirname, '../..');
const RANGERS_DB = path.join(HOTG_ROOT, 'packages/app/features/game/DB/rangers');
const TEAMS_RANGERS = path.join(HOTG_ROOT, 'packages/app/features/game/DB/Teams/Rangers.ts');

const VALID_COLORS = new Set(['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'orange', 'purple', 'gold', 'silver', 'shadow', 'dark']);

function loadJson(file) {
  return JSON.parse(fs.readFileSync(path.join(HG_PATH, file), 'utf8'));
}

function escapeTsString(s) {
  if (s == null) return "''";
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}

function toValidIdentifier(s) {
  return s.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
}

function main() {
  if (!fs.existsSync(HG_PATH)) {
    console.error('HeroesGrid export path not found:', HG_PATH);
    process.exit(1);
  }
  const reportPath = path.join(HOTG_ROOT, 'scripts/sync-heroesgrid/discovery-report.json');
  if (!fs.existsSync(reportPath)) {
    console.error('Run discover.js first.');
    process.exit(1);
  }

  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const rangersHg = loadJson('rangers.json');
  const rangerCards = loadJson('ranger_cards.json') || loadJson('cards.json') || [];
  const teams = loadJson('teams.json') || [];

  const cardById = new Map();
  rangerCards.forEach((c) => cardById.set(String(c.id), c));
  const teamById = new Map();
  teams.forEach((t) => teamById.set(String(t.id), t));

  const bySlug = new Map();
  rangersHg.forEach((r) => bySlug.set(r.slug, r));

  const missingSlugs = report.missingRangersAllSlugs || report.missingRangers?.map((r) => r.slug) || [];
  const createRangerLines = [];
  const newImports = [];

  for (const slug of missingSlugs) {
    const r = bySlug.get(slug);
    if (!r) continue;
    const slugSnake = slug.replace(/-/g, '_');
    const owner = slugSnake;
    const team = (teamById.get(String(r.team_id))?.name || r.title || 'Mighty Morphin').trim();
    let color = (r.color || 'red').toLowerCase();
    if (!VALID_COLORS.has(color)) color = 'red';

    const deckEntries = [];
    for (const d of r.deck || []) {
      const card = cardById.get(String(d.card_id));
      const cardName = d.card_name || card?.name || 'Unknown';
      const count = d.count || 1;
      const hgCard = card || { name: cardName, energy_cost: '0', type: 'MANEUVER', description: '', shields: '0', attack_dice: 0, attack_hit: 0 };
      const base = convertHgRangerCard(hgCard);
      const varName = toValidIdentifier(cardName.toLowerCase().replace(/\s+/g, '_')).slice(0, 25) || 'c' + deckEntries.length;
      deckEntries.push({ varName: varName + deckEntries.length, base, count });
    }

    const lines = [
      "import { BaseRangerCard, RangerCard } from '../../Card/CardTypes';",
      "import { createDeck } from '../cardUtils';",
      '',
    ];
    for (const { varName, base } of deckEntries) {
      lines.push(`const ${varName}: BaseRangerCard = {`);
      lines.push(`  name: ${escapeTsString(base.name)},`);
      lines.push(`  type: '${base.type}',`);
      lines.push(`  text: [${escapeTsString((base.text && base.text[0]) || '')}],`);
      lines.push(`  energy: ${base.energy},`);
      lines.push(`  shields: ${base.shields},`);
      if (base.attack) {
        lines.push(`  attack: [${base.attack.map((a) => `{ value: ${a.value}${a.fixed ? ', fixed: true' : ''} }`).join(', ')}],`);
      }
      lines.push('};');
      lines.push('');
    }
    const deckListStr =
      deckEntries.length === 0
        ? '[]'
        : '[\n    ' + deckEntries.map(({ varName, count }) => `[${varName}, ${count}]`).join(',\n    ') + '\n  ]';
    lines.push('const deck: RangerCard[] = createDeck(');
    lines.push(`  ${deckListStr},`);
    lines.push('  {');
    lines.push(`    team: ${escapeTsString(team)},`);
    lines.push(`    owner: '${owner}',`);
    lines.push(`    color: '${color}'`);
    lines.push('  }');
    lines.push(');');
    lines.push('');
    lines.push('export default deck;');

    const fileBase = owner;
    const filePath = path.join(RANGERS_DB, fileBase + '.ts');
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    newImports.push({ name: fileBase });
    createRangerLines.push(
      `  createRanger({\n    id: '${owner}',\n    name: ${escapeTsString(r.name || '')},\n    ability: {\n      name: ${escapeTsString(r.ability_name || '')},\n      text: ${escapeTsString(r.ability || '')},\n    },\n  })`
    );
    if (newImports.length % 50 === 0) console.log('Written', newImports.length, 'ranger decks');
  }

  // Update rangers/index.ts: append new imports and spreads
  const rangersIndexPath = path.join(HOTG_ROOT, 'packages/app/features/game/DB/rangers/index.ts');
  let indexContent = fs.readFileSync(rangersIndexPath, 'utf8');
  for (const { name } of newImports) {
    if (indexContent.includes(`from './${name}'`)) continue;
    const lastImport = indexContent.lastIndexOf("from './");
    const insertPos = indexContent.indexOf('\n', lastImport) + 1;
    indexContent = indexContent.slice(0, insertPos) + `import ${name} from './${name}'\n` + indexContent.slice(insertPos);
  }
  const closingBracket = indexContent.indexOf(']', indexContent.indexOf('export default ['));
  const beforeBracket = indexContent.slice(0, closingBracket);
  const afterBracket = indexContent.slice(closingBracket);
  const newSpreads = newImports.map((i) => `  ...${i.name}`).join(',\n');
  const needsComma = !beforeBracket.trimEnd().endsWith(',');
  indexContent = beforeBracket + (needsComma ? ',\n' : '') + newSpreads + '\n' + afterBracket;
  fs.writeFileSync(rangersIndexPath, indexContent, 'utf8');
  console.log('Updated rangers/index.ts');

  // Append to Rangers.ts (Teams)
  const rangersTsContent = fs.readFileSync(TEAMS_RANGERS, 'utf8');
  const endMarker = '] as Ranger[]';
  const insertBefore = rangersTsContent.lastIndexOf(endMarker);
  if (insertBefore === -1) {
    console.warn('Could not find insertion point in Rangers.ts');
  } else {
    const toInsert = ',\n' + createRangerLines.join(',\n') + '\n';
    const newContent = rangersTsContent.slice(0, insertBefore) + toInsert + rangersTsContent.slice(insertBefore);
    fs.writeFileSync(TEAMS_RANGERS, newContent, 'utf8');
    console.log('Updated Teams/Rangers.ts');
  }

  console.log('Done. Added', newImports.length, 'ranger decks.');
}

main();
