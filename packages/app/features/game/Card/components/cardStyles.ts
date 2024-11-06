import { styled } from 'tamagui'
import { Stack, XStack, YStack, Text } from 'tamagui'

// Card Container
export const CardContainer = styled(Stack, {
  width: 150,
  height: 200,
  overflow: 'hidden',
  borderRadius: '$3',
  userSelect: 'none',
  backgroundColor: 'white',
  shadowColor: '$shadowColor',
  shadowRadius: 5,
  shadowOffset: { width: -4, height: 2 },
  shadowOpacity: 1,
  variants: {
    color: {
      red: {
        borderColor: '$red9Dark',
      },
      blue: {
        borderColor: '$blue9Dark',
      },
      green: {
        borderColor: '$green9Dark',
      },
    },
  } as const,
})

export const CardHeader = styled(Stack, {
  height: 30,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    color: {
      red: { backgroundColor: '$red9Dark' },
      blue: { backgroundColor: '$blue9Dark' },
      green: { backgroundColor: '$green9Dark' },
    },
  } as const,
})

export const CardHeaderCutout = styled(Stack, {
  position: 'absolute',
  left: 0,
  right: 0,
  height: 32,
  overflow: 'hidden',
})

export const CardTitle = styled(Text, {
  color: 'black',
  fontSize: '$1',
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  zIndex: 2,
})

export const StatsRow = styled(XStack, {
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
})

export const StatContainer = styled(XStack, {
  alignItems: 'center',
  gap: '$1',
})

export const StatText = styled(Text, {
  color: 'white',
  fontSize: '$1',
})

// Type Banner
export const TypeBanner = styled(XStack, {
  paddingVertical: 4,
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    color: {
      red: { backgroundColor: '$red9Dark' },
      blue: { backgroundColor: '$blue9Dark' },
      green: { backgroundColor: '$green9Dark' },
    },
  } as const,
})

export const TypeText = styled(Text, {
  fontSize: 10,
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  fontWeight: 'bold',
  textAlign: 'center',
})

// Card Content
export const ContentContainer = styled(YStack, {
  flex: 1,
  padding: '$2',
  gap: '$1',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
})

export const CardDescription = styled(Text, {
  fontSize: 9,
  textAlign: 'center',
  color: 'black',
  lineHeight: 12,
  fontWeight: '500',
})

// Stats Container
export const StatsContainer = styled(XStack, {
  backgroundColor: '$gray9',
  paddingHorizontal: '$1',
  borderRadius: '$2',
  alignItems: 'center',
  gap: '$1',
})

export const StatValue = styled(Text, {
  fontSize: '$1',
  color: 'white',
  fontWeight: 'bold',
})

// Footer
export const CardFooter = styled(XStack, {
  padding: '$1',
  paddingVertical: 4,
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$gray9',
  borderBottomLeftRadius: '$2',
  borderBottomRightRadius: '$2',
})

export const FooterText = styled(Text, {
  fontSize: 8,
  color: 'white',
})

// New styles for dice container
export const DiceContainer = styled(XStack, {
  flexWrap: 'wrap',
  gap: '$1',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '$1',
})

// Fixed Attack Container
export const FixedAttackContainer = styled(XStack, {
  gap: '$1',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '$1',
})

// Special Attack Container
export const SpecialAttackContainer = styled(XStack, {
  backgroundColor: '$gray3',
  paddingVertical: 2,
  paddingHorizontal: '$2',
  borderRadius: '$2',
  marginBottom: '$1',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$1',
})

export const SpecialText = styled(Text, {
  fontSize: 10,
  color: '$gray11',
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  fontWeight: 'bold',
})
