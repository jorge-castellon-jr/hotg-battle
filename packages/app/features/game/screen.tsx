import React from 'react'
import { View, Button } from 'tamagui'
import useGameStore from './gameState'
import RangerDeck from './Card/components/RangerDeck'

const GameScreen: React.FC = () => {
  const { rangerDecks, hand, enemies, energy, turn, drawCard } = useGameStore()

  return (
    <View>
      <h1>{turn === 'rangers' ? "Ranger's Turn" : "Enemy's Turn"}</h1>

      {/* Display Ranger Decks and Hand */}
      <View>
        <h2>Rangers</h2>
        <View>
          {/* Draw Card Buttons for each Ranger */}
          {Object.keys(rangerDecks).map((rangerKey) => (
            <Button key={rangerKey} onPress={() => drawCard(rangerKey as 'red' | 'blue' | 'green')}>
              Draw {rangerKey} Ranger Card
            </Button>
          ))}
          {/* Display Current Hand */}
          <View>
            {hand.map((card, index) => (
              <View key={index}>
                <h3>{card.name}</h3>
                <p>Type: {card.type}</p>
                <p>Shields: {card.shields}</p>
                <p>Text: {card.text}</p>
                <p>Owner: {card.owner}</p>
              </View>
            ))}
          </View>
          {/* Render each Ranger's deck */}
          <RangerDeck owner="Red Ranger" />
          <RangerDeck owner="Blue Ranger" />
          <RangerDeck owner="Green Ranger" />
        </View>
      </View>

      {/* Display Enemies */}
      <View>
        <h2>Enemies</h2>
        {enemies.map((enemyName, index) => (
          <View key={index}>
            <h3>{enemyName}</h3>
            {/* Display additional enemy information if available */}
          </View>
        ))}
      </View>

      {/* Display Energy */}
      <View>
        <h3>Energy: {energy}</h3>
      </View>
    </View>
  )
}

export default GameScreen
