import React, { memo } from 'react'
import { Shield, Sword, Zap } from 'lucide-react'
import { RangerCard as RangerCardType } from '../CardTypes'
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

interface DiceIconProps {
  size: number
  color: string
}

const EnergyStats = memo(({ value }: { value: number }) => (
  <StatContainer position="absolute" left="$2">
    <Zap size={10} color="white" strokeWidth={2.5} />
    <StatText>{value >= 0 ? value : "X"}</StatText>
  </StatContainer>
))

const ShieldStats = memo(({ value }: { value: number }) => (
  <StatContainer>
    <Shield size={10} color="white" strokeWidth={2.5} />
    <StatText>{value}</StatText>
  </StatContainer>
))

const DiceIcon: React.FC<DiceIconProps> = memo(({ size = 14, color = '#374151' }) => (
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
}

enum RangerColors {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

const RangerCard: React.FC<RangerCardProps> = ({ card }) => {
  return (
    <CardContainer color={card.color as RangerColors}>
      {/* Header */}
      <CardHeader>
        <CardCutout bottom={-2}>
          <CardCutOutShape color={card.color as RangerColors} />
        </CardCutout>
        <CardTitle>{card.name}</CardTitle>
      </CardHeader>

      {/* Type Banner */}
      <TypeBanner color={card.color as RangerColors}>
        <EnergyStats value={card.energy} />
        <TypeText>{card.type}</TypeText>
      </TypeBanner>

      {/* Main Content */}
      <ContentContainer>
        <CardCutout top={-2} rotate="180deg">
          <CardCutOutShape color={card.color as RangerColors} />
        </CardCutout>
        {card.attack && (
          <>
            {card.attack.fixed ? (
              <FixedAttackContainer>
                <Sword size={14} strokeWidth={2.5} />
                <StatText color="black" fontSize={12} fontWeight="bold">
                  {card.attack.value}
                </StatText>
              </FixedAttackContainer>
            ) : (
              <DiceContainer>
                {card.attack.value < 0 ? (
                  <Text>Special</Text>
                ) : (
                  [...Array(card.attack.value)].map((_, index) => (
                    <DiceIcon
                      key={index}
                      size={16}
                      color={
                        card.color === 'red'
                          ? '#ef4444'
                          : card.color === 'blue'
                            ? '#3b82f6'
                            : '#22c55e'
                      }
                    />
                  ))
                )}
              </DiceContainer>
            )}
          </>
        )}
        <YStack flex={1} justifyContent="center">
          <CardDescription>{card.text}</CardDescription>
        </YStack>
        <CardCutout bottom={-2}>
          <CardCutOutShape color={card.color as RangerColors} />
        </CardCutout>
      </ContentContainer>

      {/* Footer */}
      <CardFooter color={card.color as RangerColors}>
        <FooterText>
          {card.team} {card.owner}
        </FooterText>
        <FooterText>
          <ShieldStats value={card.shields} />
          {/* <StatContainer> */}
          {/*   <Shield size={10} color="white" strokeWidth={2.5} /> */}
          {/*   <StatText>{card.shields}</StatText> */}
          {/* </StatContainer> */}
        </FooterText>
      </CardFooter>
    </CardContainer>
  )
}

export default RangerCard
