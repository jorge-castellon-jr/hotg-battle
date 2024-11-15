import React from 'react'
import { Button } from 'tamagui'
import { rangerColors } from '../utils/colors'

interface DrawButtonProps {
  onPress: () => void
  color: string
}

export const DrawButton: React.FC<DrawButtonProps> = ({ onPress, color }) => {
  return (
    <Button
      onPress={onPress}
      backgroundColor={color as 'unset'}
      color={color === rangerColors.white ? 'black' : 'white'}
    >
      Draw
    </Button>
  )
}
