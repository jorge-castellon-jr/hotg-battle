export const CARD_HIDE_OFFSET = 200 // Amount to move cards down
export const ANIMATION_CONFIG = {
  damping: 15,
  stiffness: 150,
  mass: 0.5,
}

export const getCardAnimation = (
  index: number,
  selectedIndex: number,
  basePosition: number
): number => {
  return index === selectedIndex ? basePosition : CARD_HIDE_OFFSET
}
