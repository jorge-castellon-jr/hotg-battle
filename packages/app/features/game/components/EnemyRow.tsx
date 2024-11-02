import React from 'react';
import { YStack, XStack, useWindowDimensions } from 'tamagui';
import { EnemyCard as EnemyCardData } from '../Card/CardTypes';
import EnemyCard from '../Card/components/EnemyCard';

interface EnemyRowProps {
  enemies: EnemyCardData[];
}

const EnemyRow: React.FC<EnemyRowProps> = ({ enemies }) => {
  const { width: windowWidth } = useWindowDimensions();
  
  // Calculate responsive card width
  // Assuming we want 4 cards per row with some padding and gap
  const totalHorizontalPadding = 32; // $4 padding on both sides (16 * 2)
  const totalGaps = 24; // $2 gap between cards (8 * 3)
  const availableWidth = windowWidth - totalHorizontalPadding - totalGaps;
  const cardWidth = Math.floor(availableWidth / 4); // Divide by 4 cards
  const cardHeight = Math.floor(cardWidth * 1.5); // Maintain 2:3 ratio

  // Create arrays of length 4 for both rows, filling with undefined for empty slots
  const backRowSlots = Array(4).fill(undefined);
  const frontRowSlots = Array(4).fill(undefined);

  // Fill slots with actual enemies
  enemies.forEach((enemy, index) => {
    if (index < 4) {
      frontRowSlots[index] = enemy;
    } else if (index < 8) {
      backRowSlots[index - 4] = enemy;
    }
  });

  // Custom EnemyCard wrapper to pass dynamic sizes
  const ResponsiveEnemyCard = ({ enemy }: { enemy?: EnemyCardData }) => (
    <YStack
      animation="lazy"
      enterStyle={{
        opacity: 0,
        scale: 0.9,
        y: 20,
      }}
      exitStyle={{
        opacity: 0,
        scale: 0.9,
        y: 20,
      }}
    >
      <EnemyCard 
        enemy={enemy} 
        width={cardWidth} 
        height={cardHeight}
      />
    </YStack>
  );

  return (
    <YStack 
      padding="$4" 
      gap="$2"
      width="100%"
    >
      {/* Back row */}
      <XStack 
        justifyContent="center" 
        gap="$2"
        width="100%"
      >
        {backRowSlots.map((enemy, index) => (
          <ResponsiveEnemyCard 
            key={enemy?.id || `back-empty-${index}`} 
            enemy={enemy}
          />
        ))}
      </XStack>

      {/* Front row */}
      <XStack 
        justifyContent="center" 
        gap="$2"
        width="100%"
      >
        {frontRowSlots.map((enemy, index) => (
          <ResponsiveEnemyCard 
            key={enemy?.id || `front-empty-${index}`} 
            enemy={enemy}
          />
        ))}
      </XStack>
    </YStack>
  );
};

export default EnemyRow;
