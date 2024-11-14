import React, { memo } from 'react'
import { Shield, Sword, Zap } from 'lucide-react'
import { RangerCard as RangerCardType } from './CardTypes'
import {
  CardContainer,
  CardHeader,
  CardTitle,
  StatContainer,
  StatText,
  TypeBanner,
  TypeText,
  ContentContainer,
  CardDescription,
  CardFooter,
  FooterText,
  DiceContainer,
  FixedAttackContainer,
  CardCutout,
} from './cardStyles'
import { YStack, Text } from '@my/ui'
import { CardCutOutShape } from './HeaderShape'
import { rangerColors } from '../utils/colors'

interface DiceIconProps {
  size: number
  color: string
}

const EnergyStats = memo(({ value }: { value: number }) => (
  <StatContainer position="absolute" left="$2">
    <Zap size={10} color="white" strokeWidth={2.5} />
    <StatText>{value >= 0 ? value : 'X'}</StatText>
  </StatContainer>
))

const ShieldStats = memo(({ value }: { value: number }) => (
  <StatContainer>
    <Shield size={10} color="white" strokeWidth={2.5} />
    <StatText>{value}</StatText>
  </StatContainer>
))

export const DiceIcon: React.FC<DiceIconProps> = memo(({ size = 14, color = '#374151' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M3.3 7l8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
))

interface RangerCardProps {
  card: RangerCardType
  onPress?: () => void
}

const RangerCard: React.FC<RangerCardProps> = ({ card, onPress }) => {
  return (
    <CardContainer onPress={onPress}>
      {/* Header */}
      <CardHeader>
        <CardCutout bottom={-2}>
          <CardCutOutShape color={rangerColors[card.color]} />
        </CardCutout>
        <CardTitle>{card.name}</CardTitle>
      </CardHeader>

      {/* Type Banner */}
      <TypeBanner backgroundColor={rangerColors[card.color]}>
        <EnergyStats value={card.energy} />
        <TypeText>{card.type}</TypeText>
      </TypeBanner>

      {/* Main Content */}
      <ContentContainer>
        <CardCutout top={-2} rotate="180deg">
          <CardCutOutShape color={rangerColors[card.color]} />
        </CardCutout>
        {card.type === 'attack' &&
          card.attack &&
          card.attack.map((attack) => (
            <>
              {attack.fixed ? (
                <FixedAttackContainer>
                  <Sword size={14} strokeWidth={2.5} />
                  <StatText color="black" fontSize={12} fontWeight="bold">
                    {attack.value}
                  </StatText>
                </FixedAttackContainer>
              ) : (
                <DiceContainer>
                  {attack.value < 0 ? (
                    <Text>Special</Text>
                  ) : (
                    [...Array(attack.value)].map((_, index) => (
                      <DiceIcon key={index} size={16} color={rangerColors[card.color]} />
                    ))
                  )}
                </DiceContainer>
              )}
            </>
          ))}
        <YStack flex={1} justifyContent="center">
          {card.text.map((text) => (
            <CardDescription>{text}</CardDescription>
          ))}
        </YStack>
        <CardCutout bottom={-2}>
          <CardCutOutShape color={rangerColors[card.color]} />
        </CardCutout>
      </ContentContainer>

      {/* Footer */}
      <CardFooter backgroundColor={rangerColors[card.color]}>
        <FooterText>
          {card.team} {card.owner}
        </FooterText>
        <FooterText>
          <ShieldStats value={card.shields} />
        </FooterText>
      </CardFooter>
    </CardContainer>
  )
}

export default RangerCard
