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
      {(controllerProps) => (
        <>
          {hand.map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              handLength={hand.length}
              onPlayCard={onPlayCard}
              {...controllerProps}
            />
          ))}
        </>
      )}
    </HandController>
  );
};

export default RangerHand;
