import React from 'react'

interface DiscardIconProps {
  size?: number
  color?: string
  strokeWidth?: number
}

const DiscardIcon: React.FC<DiscardIconProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Wider base platform */}
    <rect x="4" y="16" width="16" height="4" rx="1" />

    {/* Large tombstone */}
    <path d="M6 4.5C6 3.67157 6.67157 3 7.5 3H16.5C17.3284 3 18 3.67157 18 4.5V16H6V4.5Z" />
  </svg>
)

export default DiscardIcon
