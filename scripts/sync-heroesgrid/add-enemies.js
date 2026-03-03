#!/usr/bin/env node
/**
 * Generate missing enemy deck files and update index files from HeroesGrid data.
 * Run after discover.js. Uses HEROESGRID_EXPORT or first CLI arg for HG export path.
 */

const fs = require('fs');
const path = require('path');
const { convertHgEnemyCard } = require('./convert.js');

// Sibling repo: from hotg-battle root, HeroesGrid is ../HeroesGrid
const HG_PATH = process.env.HEROESGRID_EXPORT || process.argv[2] || path.join(__dirname, '../../../HeroesGrid/apps/web/data/export');
const HOTG_ROOT = path.join(__dirname, '../..');
const ENEMIES_DB = path.join(HOTG_ROOT, 'packages/app/features/game/DB/Enemies');

function loadJson(file) {
  const p = path.join(HG_PATH, file);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function escapeTsString(s) {
  if (s == null) return "''";
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}

function toValidIdentifier(slug) {
  return slug.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
}

function getFolder(monsterType) {
  const t = (monsterType || '').toLowerCase();
  if (t === 'foot') return 'FootSoldiers';
  if (t === 'monster' || t === 'elite') return 'Monsters';
  if (t === 'boss') return 'Bosses';
  if (t === 'nemesis') return 'Nemesis';
  return 'Monsters';
}

function generateDeckFile(enemy, fullEnemy) {
  const owner = enemy.ownerId;
  let enemyType = (enemy.monster_type || 'monster').toLowerCase();
  if (enemyType !== 'foot' && enemyType !== 'monster' && enemyType !== 'boss') enemyType = 'nemesis';
  const deck = fullEnemy?.deck || [];
  const deckEntries = [];
  for (const entry of deck) {
    const base = convertHgEnemyCard(entry, owner, enemyType);
    const count = entry.count || 1;
    const varName = toValidIdentifier((entry.name || 'card').toLowerCase().replace(/\s+/g, '_')).slice(0, 30) || 'card';
    deckEntries.push({ varName, base, count });
  }

  const lines = [
    "import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'",
    "import { createDeck } from '../../cardUtils'",
    '',
  ];

  for (const { varName, base } of deckEntries) {
    const attackStr = base.attacks?.length
      ? `attacks: [${base.attacks.map((a) => `{ value: ${a.value}, fixed: ${a.fixed !== false} }`).join(', ')}],`
      : '';
    lines.push(`const ${varName}: BaseEnemyCard = {`);
    lines.push(`  name: ${escapeTsString(base.name)},`);
    lines.push(`  type: '${base.type}',`);
    lines.push(`  text: ${escapeTsString(base.text)},`);
    lines.push(`  health: ${base.health},`);
    if (attackStr) lines.push(`  ${attackStr}`);
    lines.push('}');
    lines.push('');
  }

  const deckListStr =
    deckEntries.length === 0
      ? '[]'
      : '[\n    ' +
        deckEntries.map(({ varName, count }) => `[${varName}, ${count}]`).join(',\n    ') +
        '\n  ]';

  lines.push('export default createDeck(');
  lines.push(`  ${deckListStr},`);
  lines.push('  {');
  lines.push(`    enemyType: '${enemyType}',`);
  lines.push(`    owner: '${owner}',`);
  lines.push('  }');
  lines.push(') as EnemyCard[]');

  return lines.join('\n');
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
  const enemies = loadJson('enemies.json');
  const bySlug = new Map();
  const byId = new Map();
  enemies.forEach((e) => {
    if (e.slug) bySlug.set(e.slug, e);
    byId.set(String(e.id), e);
  });

  const missing = report.missingEnemies || [];
  const folderImports = { FootSoldiers: [], Monsters: [], Bosses: [], Nemesis: [] };
  const folderDecks = { FootSoldiers: [], Monsters: [], Bosses: [], Nemesis: [] };
  const folderEnemies = { FootSoldiers: [], Monsters: [], Bosses: [], Nemesis: [] };

  for (const enemy of missing) {
    const fullEnemy = bySlug.get(enemy.slug) || byId.get(String(enemy.id));
    const folder = getFolder(enemy.monster_type);
    const fileBase = toValidIdentifier(enemy.ownerId);
    if (!fileBase) continue;

    const dir = path.join(ENEMIES_DB, folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const content = generateDeckFile(enemy, fullEnemy);
    const filePath = path.join(dir, fileBase + '.ts');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Wrote', path.relative(HOTG_ROOT, filePath));

    const importName = fileBase;
    folderImports[folder].push(`import ${importName} from './${fileBase}'`);
    folderDecks[folder].push(`  ...${importName}`);
    const nemesisEffect =
      (enemy.monster_type || '').toLowerCase() === 'nemesis' && enemy.nemesis_effect
        ? `,\n    nemesisEffect: ${escapeTsString(enemy.nemesis_effect)}`
        : '';
    let enemyType = (enemy.monster_type || 'monster').toLowerCase();
    if (enemyType === 'elite') enemyType = 'monster';
    folderEnemies[folder].push(
      `  createEnemy({\n    id: '${enemy.ownerId}',\n    name: ${escapeTsString(enemy.name)},\n    type: '${enemyType}'${nemesisEffect}\n  })`
    );
  }

  // Update index files (preserve existing FootSoldiers/Monsters entries)
  const existingFoot = "import { createEnemy } from '../enemyDatabaseUtils'\nimport PuttyPotrollers from './PuttyPotrollers'\n";
  const existingMonsters = "import { createEnemy } from '../enemyDatabaseUtils'\nimport EvilGreenRanger from './EvilGreenRanger'\n";

  for (const folder of ['FootSoldiers', 'Monsters', 'Bosses', 'Nemesis']) {
    const indexPath = path.join(ENEMIES_DB, folder, 'index.ts');
    const exportName = folder === 'FootSoldiers' ? 'footEnemies' : folder === 'Monsters' ? 'monsterEnemies' : folder === 'Bosses' ? 'bossEnemies' : 'nemesisEnemies';
    let imports = folderImports[folder];
    let decks = folderDecks[folder];
    let enemiesList = folderEnemies[folder];

    if (folder === 'FootSoldiers') {
      imports = ["import PuttyPotrollers from './PuttyPotrollers'", ...folderImports.FootSoldiers];
      decks = ['...PuttyPotrollers', ...folderDecks.FootSoldiers];
      enemiesList = [
        "createEnemy({ id: 'putty_patrollers', name: 'Putty Patrollers', type: 'foot' })",
        ...folderEnemies.FootSoldiers,
      ];
    } else if (folder === 'Monsters') {
      imports = ["import EvilGreenRanger from './EvilGreenRanger'", ...folderImports.Monsters];
      decks = ['...EvilGreenRanger', ...folderDecks.Monsters];
      enemiesList = [
        "createEnemy({ id: 'evil_green_ranger', name: 'Evil Green Ranger', type: 'monster' })",
        ...folderEnemies.Monsters,
      ];
    } else {
      imports = folderImports[folder];
      decks = folderDecks[folder];
      enemiesList = folderEnemies[folder];
    }

    const createEnemyImport = "import { createEnemy } from '../enemyDatabaseUtils'\n";
    const deckLines = decks.length ? decks.map((d) => '  ' + d).join(',\n') + '\n' : '  // none\n';
    const out =
      createEnemyImport +
      (imports.length ? imports.join('\n') + '\n\n' : '') +
      'export default [\n' +
      deckLines +
      ']\n\nexport const ' +
      exportName +
      ' = [\n  ' +
      (enemiesList.length ? enemiesList.join(',\n  ') + '\n' : '// none\n') +
      ']\n';

    fs.writeFileSync(indexPath, out, 'utf8');
    console.log('Updated', path.relative(HOTG_ROOT, indexPath));
  }

  console.log('Done. Added', missing.length, 'enemy decks.');
}

main();
