import React, { useState } from 'react'
import {  YStack, XStack, ScrollView, Text } from 'tamagui'
import { RangerSelectorProps } from './setupTypes'
import { BaseSheet } from '../game/UI/BaseSheet'
import rangerDatabase from '../game/DB/rangerDatabase'
import { rangerColors } from '../game/utils/colors'

export const RangerSelector: React.FC<RangerSelectorProps> = ({ position, selected, onSelect }) => {
  const [open, setOpen] = useState(false)
  const availableRangers = rangerDatabase

  const textColor = (color: string) => (color === 'white' ? 'black' : 'white')
  return (
    <YStack flex={1} paddingVertical="$2">
      <YStack
        onPress={() => setOpen(true)}
        padding="$4"
        borderRadius="$4"
        backgroundColor={selected ? rangerColors[selected.color] : '$accentBackground'}
      >
        {selected ? (
          <>
            <Text textAlign="center" fontSize="$6" color={textColor(selected.color)}>
              {selected.name}
            </Text>
            <Text
              textAlign="center"
              fontSize="$3"
              fontWeight="bold"
              color={textColor(selected.color)}
            >
              {selected.ability.name}
            </Text>
          </>
        ) : (
          <Text textAlign="center">Select {position} Ranger</Text>
        )}
      </YStack>

      <BaseSheet open={open} onOpenChange={setOpen} disableDrag>
        <YStack flex={1} padding="$2">
          {/* Header */}
          <Text fontSize="$6" fontWeight="bold" textAlign="center">
            Choose Ranger
          </Text>
          <ScrollView flex={1} height={500} showsVerticalScrollIndicator={false}>
            <XStack gap="$3" padding="$3" flexWrap="wrap">
              {availableRangers.map((ranger, index) => (
                <YStack
                  key={`${ranger.id}-${index}`}
                  flex={1}
                  flexBasis="40%"
                  backgroundColor={rangerColors[ranger.color]}
                  borderRadius="$4"
                  padding="$2"
                  justifyContent="center"
                  onPress={() => {
                    onSelect(ranger.id, ranger.ability.name)
                    setOpen(false)
                  }}
                >
                  <Text textAlign="center" fontSize="$3" color={textColor(ranger.color)}>
                    {ranger.name}
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="$1"
                    fontWeight="bold"
                    color={textColor(ranger.color)}
                  >
                    {ranger.ability.name}
                  </Text>
                </YStack>
              ))}
            </XStack>
          </ScrollView>
        </YStack>
      </BaseSheet>
    </YStack>
  )
}
