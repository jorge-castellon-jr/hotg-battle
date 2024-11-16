import React, { useState } from 'react'
import { YStack, XStack, ScrollView, Text, Separator, H5 } from 'tamagui'
import { RangerSelectorProps } from './setupTypes'
import { BaseSheet } from '../game/UI/BaseSheet'
import { rangerColors } from '../game/utils/colors'
import { RangerSheetCard } from './RangerSheetCard'

import BeastMorphersRangers from '../game/DB/Teams/BeastMorphersRangers'
import DinoChargeRangers from '../game/DB/Teams/DinoChargeRangers'
import DinoFuryRangers from '../game/DB/Teams/DinoFuryRangers'
import DinoThunderRangers from '../game/DB/Teams/DinoThunderRangers'
import HyperforceRangers from '../game/DB/Teams/HyperforceRangers'
import JungleFuryRangers from '../game/DB/Teams/JungleFuryRangers'
import LunarRangers from '../game/DB/Teams/LunarRangers'
import MightyMorphinRangers from '../game/DB/Teams/MightyMorphinRangers'
import NinjaSteelRangers from '../game/DB/Teams/NinjaSteelRangers'
import OmegaRangers from '../game/DB/Teams/OmegaRangers'
import RangerOperatorSeriesRangers from '../game/DB/Teams/RangerOperatorSeriesRangers'
import Rangers from '../game/DB/Teams/Rangers'
import SpdRangers from '../game/DB/Teams/SpdRangers'
import SuperMegaforceRangers from '../game/DB/Teams/SuperMegaforceRangers'
import SuperSamuraiRangers from '../game/DB/Teams/SuperSamuraiRangers'
import TimeForceRangers from '../game/DB/Teams/TimeForceRangers'
import TurboRangers from '../game/DB/Teams/TurboRangers'
import ZeoRangers from '../game/DB/Teams/ZeoRangers'
import rangerDatabase from '../game/DB/rangerDatabase'

export const RangerSelector: React.FC<RangerSelectorProps> = ({ position, selected, onSelect }) => {
  const [open, setOpen] = useState(false)

  const textColor = (color: string) => (color === 'white' ? 'black' : 'white')
  return (
    <>
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
              color={textColor(selected.color)}
              textTransform="capitalize"
            >
              {selected.team} {selected.color}
            </Text>
            <Separator borderColor="white" marginVertical="$2" />
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
        <YStack flex={1} padding="$4">
          {/* Header */}
          <Text fontSize="$6" fontWeight="bold" textAlign="center">
            Choose Ranger
          </Text>
          <ScrollView flex={1} height={500} showsVerticalScrollIndicator={false}>
            <H5 paddingVertical="$2">Mighty Morphin Rangers</H5>
            <XStack gap="$3" flexWrap="wrap">
              {MightyMorphinRangers.map((ranger, index) => (
                <RangerSheetCard
                  key={`${ranger.id}-${index}`}
                  ranger={ranger}
                  onPress={() => {
                    onSelect(ranger.id, ranger.ability.name)
                    setOpen(false)
                  }}
                />
              ))}
            </XStack>

            <H5 paddingVertical="$2">Zeo Rangers</H5>
            <XStack gap="$3" flexWrap="wrap">
              {ZeoRangers.map((ranger, index) => (
                <RangerSheetCard
                  key={`${ranger.id}-${index}`}
                  ranger={ranger}
                  onPress={() => {
                    onSelect(ranger.id, ranger.ability.name)
                    setOpen(false)
                  }}
                />
              ))}
            </XStack>

            <H5 paddingVertical="$2">Other Rangers</H5>
            <XStack gap="$3" flexWrap="wrap">
              {rangerDatabase
                .slice(
                  0,
                  rangerDatabase.length - ZeoRangers.length - MightyMorphinRangers.length - 1
                )
                .map((ranger, index) => (
                  <RangerSheetCard
                    key={`${ranger.id}-${index}`}
                    ranger={ranger}
                    onPress={() => {
                      onSelect(ranger.id, ranger.ability.name)
                      setOpen(false)
                    }}
                  />
                ))}
            </XStack>
          </ScrollView>
        </YStack>
      </BaseSheet>
    </>
  )
}
