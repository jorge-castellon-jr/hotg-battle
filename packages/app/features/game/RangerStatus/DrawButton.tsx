import React from 'react'
import { Button } from 'tamagui'

interface DrawButtonProps {
  onPress: () => void
  color: string
}

export const DrawButton: React.FC<DrawButtonProps> = ({ onPress, color }) => {
  return (
    <Button onPress={onPress} backgroundColor={color as 'unset'} color="white">
      Draw
    </Button>
  )
}
