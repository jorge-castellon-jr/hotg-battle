import React from 'react'

interface HeaderShapeProps {
  color: 'red' | 'blue' | 'green'
  top?: number
  bottom?: number
  left?: boolean
  right?: boolean
}

export const CardCutOutShape: React.FC<HeaderShapeProps> = ({
  color,
  left = true,
  right = true,
  top = -20,
  bottom = 40,
}) => {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 300 30">
      {/* Left triangle */}
      {left && (
        <path
          d={`
          M0 0 
          H${top}
          L${bottom} 30
          H0 
          Z
        `}
          fill={`var(--c-${color}9Dark)`}
        />
      )}

      {/* Right triangle */}
      {right && (
        <path
          d={`
          M${300 - top} 0
          H300
          V30
          H${300 - bottom}
          Z
        `}
          fill={`var(--c-${color}9Dark)`}
        />
      )}
    </svg>
  )
}

export default CardCutOutShape
