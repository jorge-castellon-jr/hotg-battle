// src/features/game/battle/components/DiceFace.tsx
import React from 'react'
import { Svg, Rect, Path } from 'react-native-svg'
import Animated from 'react-native-reanimated'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

interface DiceFaceProps {
  value: number // 1-6 representing the die face
  size: number
}

export const DiceFace: React.FC<DiceFaceProps> = React.memo(({ value, size }) => {
  const cornerRadius = size * 0.15
  const symbolSize = size * 0.25 // Size for X marks
  const circleSize = size * 0.4 // Larger size specifically for circles
  const strokeWidth = size * 0.04
  const padding = size * 0.2

  // Helper function to create damage symbol path (X shape)
  const getDamageSymbol = (x: number, y: number) => {
    const outerSize = symbolSize / 2
    const centerSize = symbolSize / 4

    return `M ${x} ${y - outerSize}
            L ${x + centerSize} ${y}
            L ${x} ${y + outerSize}
            L ${x - centerSize} ${y}
            Z
            M ${x - outerSize} ${y}
            L ${x} ${y - centerSize}
            L ${x + outerSize} ${y}
            L ${x} ${y + centerSize}
            Z`
  }

  // Helper function to create circle path
  const getCircle = (x: number, y: number) => {
    return `M ${x} ${y - circleSize / 2} 
            a ${circleSize / 2} ${circleSize / 2} 0 1 0 0 ${circleSize} 
            a ${circleSize / 2} ${circleSize / 2} 0 1 0 0 -${circleSize}`
  } // Get symbols based on dice value
  const getSymbols = () => {
    switch (value) {
      case 1: // Value 0 with outline circle
      case 6:
        return (
          <Path
            d={getCircle(size / 2, size / 2)}
            fill="none"
            stroke="black"
            strokeWidth={strokeWidth}
          />
        )

      case 2: // Value 1 with single damage symbol
      case 3:
      case 4:
        return (
          <Path
            d={getDamageSymbol(size / 2, size / 2)}
            stroke="black"
            strokeWidth={strokeWidth}
            fill="none"
          />
        )

      case 5: // Value 2 with two diagonal damage symbols
        return (
          <>
            <Path
              d={getDamageSymbol(padding + symbolSize / 2, padding + symbolSize / 2)}
              stroke="black"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Path
              d={getDamageSymbol(size - padding - symbolSize / 2, size - padding - symbolSize / 2)}
              stroke="black"
              strokeWidth={strokeWidth}
              fill="none"
            />
          </>
        )

      default:
        return null
    }
  }

  return (
    <AnimatedSvg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Dice background */}
      <Rect
        x={1}
        y={1}
        width={size - 2}
        height={size - 2}
        rx={cornerRadius}
        fill="white"
        stroke="#ccc"
        strokeWidth={2}
      />

      {/* Dice symbols */}
      {getSymbols()}
    </AnimatedSvg>
  )
})

DiceFace.displayName = 'DiceFace'

export default DiceFace
