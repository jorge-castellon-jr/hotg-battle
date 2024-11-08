import React from 'react'
import { Button, XStack } from 'tamagui'

interface SheetFooterProps {
  onClose: (open: boolean) => void
}

export const SheetFooter: React.FC<SheetFooterProps> = ({ onClose }) => {
  return (
    <XStack
      padding="$4"
      paddingTop={0}
      width="100%"
    >
      <Button
        flex={1}
        onPress={() => onClose(false)}
        pressStyle={{ opacity: 0.8 }}
        animation="quick"
      >
        Close
      </Button>
    </XStack>
  )
}
