import React from 'react';
import { RangerCard as RangerCardType } from '../../Card/CardTypes';
import { AnimatedCard } from './AnimatedCard';
import { HandController } from './HandController';

interface RangerHandProps {
  hand: RangerCardType[];
  onPlayCard: (card: RangerCardType) => void;
}

export const RangerHand: React.FC<RangerHandProps> = ({ hand, onPlayCard }) => {
  return (
    <HandController hand={hand} onPlayCard={onPlayCard}>
      {({ cardWidth, screenWidth, hoveredIndex }) => (
        <>
          {hand.map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              totalCards={hand.length}
              cardWidth={cardWidth}
              screenWidth={screenWidth}
              hoveredIndex={hoveredIndex}
              onPlayCard={onPlayCard}
            />
          ))}
        </>
      )}
    </HandController>
  );
};

export default RangerHand;
