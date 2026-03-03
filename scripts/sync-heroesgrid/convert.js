/**
 * Schema conversion: HeroesGrid -> hotg-battle base card shapes.
 * Used by discovery and by code generators that emit TS deck files.
 */

/**
 * Map HG card type to hotg type (lowercase, ATTACK: SPECIAL -> attack).
 */
function toRangerCardType(hgType) {
  if (!hgType) return 'maneuver';
  const t = String(hgType).toLowerCase();
  if (t === 'attack' || t.startsWith('attack')) return 'attack';
  if (t === 'maneuver') return 'maneuver';
  if (t === 'reaction') return 'reaction';
  return 'maneuver';
}

/**
 * Parse energy_cost "0", "1", "X" -> number. X -> 0 for now.
 */
function toEnergy(energyCost) {
  if (energyCost == null || energyCost === '') return 0;
  const s = String(energyCost).toUpperCase();
  if (s === 'X') return 0;
  const n = parseInt(s, 10);
  return isNaN(n) ? 0 : n;
}

/**
 * Convert one HG ranger card (from ranger_cards.json) to hotg BaseRangerCard shape.
 * @param hgCard - { name, energy_cost, type, description, shields, attack_dice, attack_hit }
 * @returns BaseRangerCard-like object (no owner, team, color).
 */
function convertHgRangerCard(hgCard) {
  const name = hgCard.name || 'Unknown';
  const type = toRangerCardType(hgCard.type);
  const text = [hgCard.description || ''].filter(Boolean);
  const energy = toEnergy(hgCard.energy_cost);
  const shields = Math.max(0, parseInt(String(hgCard.shields || 0), 10) || 0);

  const base = {
    name,
    type,
    text,
    energy,
    shields,
  };

  if (type === 'attack') {
    const dice = Math.max(0, parseInt(String(hgCard.attack_dice || 0), 10) || 0);
    const hit = Math.max(0, parseInt(String(hgCard.attack_hit || 0), 10) || 0);
    const value = dice || hit || 2;
    base.attack = [{ value, fixed: dice === 0 && hit > 0 }];
  }

  return base;
}

/**
 * Infer enemy keyword type from description text.
 */
function inferEnemyKeywordType(description) {
  const d = (description || '').toLowerCase();
  if (d.includes('guard') || /\[guard\]/i.test(d)) return 'guard';
  if (d.includes('fast') || /\[fast\]/i.test(d)) return 'fast';
  if (d.includes('passive') || /\[passive\]/i.test(d) || d.includes('while this card is in play')) return 'passive';
  return 'basic';
}

/**
 * Parse "Deal N damage" from description for attacks array. Returns [] if none.
 */
function parseAttacksFromDescription(description, health) {
  const attacks = [];
  const dealMatch = (description || '').match(/deal\s+(\d+)\s+damage/i);
  if (dealMatch) {
    const value = parseInt(dealMatch[1], 10) || 0;
    if (value > 0) attacks.push({ value, fixed: true });
  }
  return attacks;
}

/**
 * Convert one HG enemy deck entry to hotg BaseEnemyCard shape.
 * @param hgEntry - { name, health, description, count }
 * @param owner - owner id string
 * @param enemyType - 'foot' | 'monster' | 'boss' | 'nemesis'
 */
function convertHgEnemyCard(hgEntry, owner, enemyType) {
  const name = hgEntry.name || 'Unknown';
  let health = parseInt(String(hgEntry.health || 0), 10);
  if (isNaN(health) || String(hgEntry.health).toUpperCase() === 'X') health = 4;
  const text = hgEntry.description || '';
  const type = inferEnemyKeywordType(text);
  const attacks = parseAttacksFromDescription(text, health);

  return {
    name,
    type,
    text,
    health,
    attacks: attacks.length ? attacks : undefined,
  };
}

module.exports = {
  convertHgRangerCard,
  convertHgEnemyCard,
  toRangerCardType,
  toEnergy,
  inferEnemyKeywordType,
  parseAttacksFromDescription,
};
