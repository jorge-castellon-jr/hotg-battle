import React from 'react'
import { Dialog, View, Text, Button } from 'tamagui'
import useGameStore from '../../gameStateStore'
import RangerDeck from './RangerDeck'

const PlayCardModal: React.FC = () => {
  // const { selectedRanger, selectRanger, playSelectedCard } = useGameStore()
  const { selectRanger } = useGameStore()

  return (
    <Dialog open={!!selectRanger}>
      <Dialog.Portal>
        <Dialog.Content>
          <View padding={20} backgroundColor="white" borderRadius={10}>
            <Text>Select a Ranger to play a card:</Text>
            <View>
              {Object.keys(useGameStore.getState().rangerDecks).map((ranger) => (
                <Button
                  key={ranger}
                  onPress={() => {
                    // useGameStore.getState().selectRanger(ranger as 'red' | 'blue' | 'green')
                  }}
                >
                  {ranger}
                </Button>
              ))}
            </View>
            <Button onPress={() => { }}>Play Card</Button>
          </View>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

export default PlayCardModal
