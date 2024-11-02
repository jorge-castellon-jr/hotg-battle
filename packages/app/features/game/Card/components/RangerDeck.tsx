import React, { useState } from 'react'
import cardDatabase from '../data/cardDatabase'
import { RangerCard } from '../types'
import { applyEffect } from '../utils/effectProcessor'

interface RangerDeckProps {
  owner: string
}

const RangerDeck: React.FC<RangerDeckProps> = ({ owner }) => {
  // Filter cards based on owner to get only cards for this Ranger
  const initialDeck = Object.values(cardDatabase).filter((card) => card.owner === owner)

  const [deck, setDeck] = useState<RangerCard[]>(initialDeck)
  const [hand, setHand] = useState<RangerCard[]>([])

  const drawCard = () => {
    if (deck.length > 0) {
      const [drawnCard, ...remainingDeck] = deck
      setDeck(remainingDeck)
      setHand([...hand, drawnCard])
    }
  }
  const playCard = (card) => {
    if (!card.effects) return
    // Apply each effect associated with the card
    card.effects.forEach((effect) => applyEffect(effect))
    // Implement additional play logic here
  }

  return (
    <div>
      <h2>{owner}'s Deck</h2>
      <button onClick={drawCard}> Draw Card </button>
      <div>
        <h3>Hand: </h3>
        {hand.map((card) => (
          <div key={card.id} onClick={() => playCard(card)}>
            <h4>{card.name} </h4>
            <p> Type: {card.type} </p>
            <p> Shields: {card.shields} </p>
            <p> {card.text} </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RangerDeck
