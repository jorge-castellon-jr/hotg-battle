import React from 'react'

interface HeaderShapeProps {
  color: string
}

export const CardHeaderShape: React.FC<HeaderShapeProps> = ({ color }) => {
  const topStartX = -20 // Top point distance from edge
  const bottomEndX = 40 // Bottom point distance from edge

  return (
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 300 30">
      {/* Background color fill */}
      <rect x="0" y="0" width="300" height="30" fill={`var(--c-${color}9Dark)`} />

      {/* White trapezoid cutout */}
      <path
        d={`
          M${topStartX} -2 
          H${300 - topStartX}
          L${300 - bottomEndX} 30 
          H${bottomEndX} 
          Z
        `}
        fill="white"
      />
    </svg>
  )
}

export default CardHeaderShape
