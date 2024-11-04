// src/features/game/battle/components/BattleOverlay.tsx
import React from 'react';
import { Stack } from 'tamagui';

interface BattleOverlayProps {
  children: React.ReactNode;
}

export const BattleOverlay: React.FC<BattleOverlayProps> = ({ children }) => {
  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="rgba(0, 0, 0, 0.7)"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Stack>
  );
};
