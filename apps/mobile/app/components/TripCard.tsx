import { YStack, XStack, Card, Text, Button, H4 } from 'tamagui'

/**
 * TripCard Component
 *
 * Example component demonstrating Tamagui with Ocean theme.
 * Shows how to use Tamagui's design system for a clean, professional UI.
 *
 * Key Patterns:
 * - Use Tamagui components (Card, Text, YStack, XStack, etc.) for UI elements
 * - Access theme colors via theme tokens (e.g., $color12, $color11)
 * - Inline styling with Tamagui props instead of StyleSheet
 */

interface TripCardProps {
  tripName: string
  destination: string
  startDate: string
  endDate: string
  participantCount: number
  totalExpenses: number
  onPress?: () => void
}

export const TripCard = ({
  tripName,
  destination,
  startDate,
  endDate,
  participantCount,
  totalExpenses,
  onPress,
}: TripCardProps) => {
  return (
    <Card
      elevate
      marginBottom="$4"
      marginHorizontal="$4"
      padding="$4"
      borderRadius="$4"
      backgroundColor="$background"
      borderWidth={1}
      borderColor="$borderColor"
      onPress={onPress}
      pressStyle={{ opacity: 0.95 }}
      hoverStyle={{ opacity: 0.98 }}
    >
      <YStack gap="$3">
        {/* Header with trip name and action */}
        <XStack justifyContent="space-between" alignItems="flex-start">
          <YStack flex={1}>
            <H4 fontWeight="bold" color="$color12">
              {tripName}
            </H4>
            <Text color="$color11" fontSize="$4">
              {destination}
            </Text>
          </YStack>
          <Button
            size="$2"
            circular
            chromeless
            icon="⋮"
            onPress={(e) => {
              e.stopPropagation()
            }}
          />
        </XStack>

        {/* Trip dates */}
        <Text color="$color11" fontSize="$3">
          {startDate} - {endDate}
        </Text>

        {/* Stats chips */}
        <XStack gap="$2" flexWrap="wrap">
          <XStack
            backgroundColor="$color8"
            paddingHorizontal="$3"
            paddingVertical="$2"
            borderRadius="$2"
            alignItems="center"
            gap="$1"
          >
            <Text fontSize="$2" color="$color12">
              👥 {participantCount} travelers
            </Text>
          </XStack>
          <XStack
            backgroundColor="$color8"
            paddingHorizontal="$3"
            paddingVertical="$2"
            borderRadius="$2"
            alignItems="center"
            gap="$1"
          >
            <Text fontSize="$2" color="$color12">
              💵 ${totalExpenses.toFixed(2)}
            </Text>
          </XStack>
        </XStack>
      </YStack>
    </Card>
  )
}
