import React from 'react';
import { ScrollView, YStack } from 'tamagui';
import { RangerCard as RangerCardData } from '../Card/CardTypes';
import RangerCard from '../Card/components/RangerCard';

interface RangerHandProps {
  hand: RangerCardData[];
  onPlayCard: (card: RangerCardData) => void;
}

const RangerHand: React.FC<RangerHandProps> = ({ hand, onPlayCard }) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      padding="$4"
    >
      <YStack 
        flexDirection="row" 
        gap="$4"
        paddingHorizontal="$2" // Extra padding for first/last cards
      >
        {hand.map((card, index) => (
          <YStack 
            key={card.id || index}
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
            // Cards slightly overlap for a stacked effect
            // marginLeft={index > 0 ? -20 : 0}
          >
            <RangerCard 
              card={card} 
              onPlayCard={onPlayCard}
            />
          </YStack>
        ))}
      </YStack>
    </ScrollView>
  );
};

export default RangerHand;
