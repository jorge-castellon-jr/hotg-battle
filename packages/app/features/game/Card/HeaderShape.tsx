import React from 'react'
import { EnemyColorValue, RangerColorValue } from '../utils/colors'

interface HeaderShapeProps {
  color: RangerColorValue | EnemyColorValue
  subColor?: RangerColorValue
  top?: number
  bottom?: number
  left?: boolean
  right?: boolean
}

export const CardCutOutShape: React.FC<HeaderShapeProps> = ({
  color,
  subColor,
  left = true,
  right = true,
  top = -20,
  bottom = 40,
}) => {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 300 30">
      {subColor && (
        <rect
          x="0"
          y="26"
          width="300"
          height="5"
          fill={subColor}
        />
      )}
      {/* Left triangle */}
      {left && (
        <>
          {subColor && (
            <path
              d={`
          M0 0 
          H${top + 9}
          L${bottom + 9} 30
          H0 
          Z
        `}
              fill={subColor}
            />
          )}
          <path
            d={`
          M0 0 
          H${top}
          L${bottom} 30
          H0 
          Z
        `}
            fill={color}
          />
        </>
      )}

      {/* Right triangle */}
      {right && (
        <>
          {subColor && (
            <path
              d={`
          M${291 - top} 0
          H300
          V30
          H${291 - bottom}
          Z
        `}
              fill={subColor}
            />
          )}
          <path
            d={`
          M${300 - top} 0
          H300
          V30
          H${300 - bottom}
          Z
        `}
            fill={color}
          />
        </>
      )}
    </svg>
  )
}

export default CardCutOutShape
