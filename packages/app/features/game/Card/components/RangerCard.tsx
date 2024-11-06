import React from 'react'
import { Shield, Sword, Zap } from 'lucide-react'
import { RangerCard as RangerCardType } from '../CardTypes'
import {
  CardContainer,
  CardHeader,
  CardTitle,
  StatsRow,
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
  CardHeaderCutout,
  HeaderTitle,
} from './cardStyles'
import { YStack, Text } from '@my/ui'
import { CardHeaderShape } from './HeaderShape'

interface DiceIconProps {
  size: number
  color: string
}

const DiceIcon: React.FC<DiceIconProps> = ({ size = 14, color = '#374151' }) => (
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
)

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
      <CardHeader color={card.color as RangerColors}>
        <CardHeaderCutout bottom={-1}>
          <CardHeaderShape color={card.color as RangerColors} />
        </CardHeaderCutout>
        <CardTitle>{card.name}</CardTitle>
      </CardHeader>

      {/* Type Banner */}
      <TypeBanner color={card.color as RangerColors}>
        <TypeText>{card.type}</TypeText>
      </TypeBanner>

      {/* Main Content */}
      <ContentContainer>
        <CardHeaderCutout top={-1} rotate='180deg'>
          <CardHeaderShape color={card.color as RangerColors} />
        </CardHeaderCutout>
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
      </ContentContainer>

      {/* Footer */}
      <CardFooter>
        <FooterText>{card.team}</FooterText>
        <FooterText>{card.owner}</FooterText>
      </CardFooter>
    </CardContainer>
  )
}

export default RangerCard
