import { Stack, YStack, Text, XStack } from 'tamagui'
import { Heart, Sword } from 'lucide-react'
import { EnemyCard as EnemyCardType } from './CardTypes'
import {
  CardContainer,
  CardCutout,
  CardDescription,
  CardHeader,
  CardTitle,
  ContentContainer,
  DiceContainer,
  FixedAttackContainer,
  StatContainer,
  StatText,
  TypeBanner,
  TypeText,
} from './cardStyles'
import CardCutOutShape from './HeaderShape'
import { DiceIcon } from './RangerCard'
import { DamageCounterBadge } from './DamageCounterBadge'
import { enemyColors } from '../utils/colors'
import { checkEnemyGuardStatus } from '../Enemy/enemyGaurdState'
import { GuardBadge } from '../Enemy/GaurdBadge'

interface EnemyCardProps {
  enemy?: EnemyCardType
  width?: number
  height?: number
  isGuarded?: boolean
}

const EnemyCard = ({ enemy, width = 150, height = 200, isGuarded = false }: EnemyCardProps) => {
  // Calculate responsive sizes based on card dimensions
  const fontSize = {
    small: Math.min(10, Math.floor(width * 0.08)),
    medium: Math.max(12, Math.floor(width * 0.08)),
    large: Math.max(14, Math.floor(width * 0.1)),
  }

  // If no enemy, render an empty slot
  if (!enemy) {
    return (
      <Stack
        width={width}
        height={height}
        backgroundColor="$gray3"
        borderRadius="$4"
        borderWidth={2}
        borderColor="$gray6"
        borderStyle="dashed"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$gray8" fontSize={fontSize.medium}>
          Empty Slot
        </Text>
      </Stack>
    )
  }

  const getColor = (type: string) => {
    if (type === 'foot') return 'green'
    if (type === 'monster') return 'orange'
    return 'purple'
  }
  
  return (
    <CardContainer width={width} height={height} pressStyle={{ scale: 0.98 }}>
      {/* Header */}
      <CardHeader height={20} pr="$1">
        <CardCutout bottom={-2}>
          <CardCutOutShape
            top={-15}
            bottom={60}
            color={enemyColors[enemy.enemyType]}
            right={false}
          />
        </CardCutout>
        <CardTitle fontSize={fontSize.small} justifyContent="flex-end" textAlign="right">
          {enemy.name}
        </CardTitle>
      </CardHeader>

      {/* Type Banner */}
      <TypeBanner backgroundColor={enemyColors[enemy.enemyType]} justifyContent="flex-end" pr="$1">
        <StatContainer position="absolute" left="$2">
          <Heart size={10} color="white" strokeWidth={2.5} />
          <StatText>{enemy.health}</StatText>
        </StatContainer>
        {enemy.type !== 'basic' && <TypeText>{enemy.type}</TypeText>}
      </TypeBanner>

      {/* Main Content */}
      <ContentContainer>
        <CardCutout top={-2} rotate="180deg">
          <CardCutOutShape
            top={-15}
            bottom={60}
            color={enemyColors[enemy.enemyType]}
            left={false}
          />
        </CardCutout>
        <XStack gap="$2">
          {enemy.attacks &&
            enemy.attacks.map((attack) => (
              <>
                {attack.fixed ? (
                  <FixedAttackContainer>
                    <Sword color="black" size={14} strokeWidth={2.5} />
                    <StatText color="black" fontSize={12} fontWeight="bold">
                      {attack.value}
                    </StatText>
                  </FixedAttackContainer>
                ) : (
                  <DiceContainer>
                    <DiceIcon size={16} color={`var(--c-${getColor(enemy.enemyType)}9Dark`} />
                    <StatText color="black" fontSize={12} fontWeight="bold">
                      {attack.value}
                    </StatText>
                  </DiceContainer>
                )}
              </>
            ))}
        </XStack>
        <YStack flex={1} justifyContent="center">
          <CardDescription fontSize={fontSize.small}>{enemy.text}</CardDescription>
        </YStack>

        <DamageCounterBadge
          damage={enemy.currentDamage}
          size={Math.min(width, height) * 0.2} // Make badge size relative to card size
        />

        <CardCutout bottom={-2}>
          <CardCutOutShape
            top={-15}
            bottom={60}
            color={enemyColors[enemy.enemyType]}
            right={false}
          />
        </CardCutout>
      </ContentContainer>
      {isGuarded && <GuardBadge />}
    </CardContainer>
  )
}

export default EnemyCard
