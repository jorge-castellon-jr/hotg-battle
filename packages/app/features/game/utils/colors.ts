// Base ranger colors that match MMPR
export const rangerColors = {
  red: '#E53E3E', // A strong, vibrant red
  blue: '#0080FF', // A vibrant true blue
  green: '#38A169', // A forest green
  yellow: '#FFC000', // A rich gold
  pink: '#D53F8C', // A deep pink
  black: '#2D3748', // A soft black
  white: '#F7FAFC', // An off-white
  gold: '#B8860B', // Deep gold (darker darkgoldenrod)
  silver: '#A0AEC0', // Metallic silver
  shadow: '#4A9AB0', // Metallic blue/teal for Shadow Ranger
} as const

// Enemy colors for different types
export const enemyColors = {
  foot: '#9ACD32', // Yellow-green for foot soldiers
  monster: '#FF8C00', // A more vibrant dark orange
  boss: '#9F2BF0', // A more vibrant purple
} as const

// Utility type for type-safety when using color keys
export type RangerColorKey = keyof typeof rangerColors
export type EnemyColorKey = (typeof enemyColors)[keyof typeof enemyColors]
