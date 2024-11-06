import React from 'react'

interface HeaderShapeProps {
  color: 'red' | 'blue' | 'green'
}

export const CardCutOutShape: React.FC<HeaderShapeProps> = ({ color }) => {
  const topStartX = -20
  const bottomEndX = 40

  return (
    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 300 30">

      {/* Left triangle */}
      <path
        d={`
          M0 0 
          H${topStartX}
          L${bottomEndX} 30
          H0 
          Z
        `}
        fill={`var(--c-${color}9Dark)`}
      />

      {/* Right triangle */}
      <path
        d={`
          M${300 - topStartX} 0
          H300
          V30
          H${300 - bottomEndX}
          Z
        `}
        fill={`var(--c-${color}9Dark)`}
      />
    </svg>
  )
}

export default CardCutOutShape
