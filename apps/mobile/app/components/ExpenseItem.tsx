import { XStack, YStack, Text, Circle } from 'tamagui'

/**
 * ExpenseItem Component
 *
 * Demonstrates using Tamagui components with Ocean theme.
 * Perfect for displaying individual expenses in a group trip.
 */

interface ExpenseItemProps {
  title: string
  amount: number
  paidBy: string
  category: string
  date: string
  splitBetween: number
  onPress?: () => void
}

export const ExpenseItem = ({
  title,
  amount,
  paidBy,
  category,
  date,
  splitBetween,
  onPress,
}: ExpenseItemProps) => {
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      food: '🍔',
      transport: '🚗',
      accommodation: '🏠',
      activity: '🎫',
      other: '⋯',
    }
    return icons[category.toLowerCase()] || '💵'
  }

  return (
    <XStack
      paddingHorizontal="$4"
      paddingVertical="$3"
      gap="$3"
      alignItems="center"
      onPress={onPress}
      pressStyle={{ opacity: 0.7 }}
      hoverStyle={{ backgroundColor: '$color3' }}
      borderRadius="$2"
    >
      {/* Category Icon */}
      <Circle size={40} backgroundColor="$color8">
        <Text fontSize={20}>{getCategoryIcon(category)}</Text>
      </Circle>

      {/* Expense Details */}
      <YStack flex={1}>
        <Text fontSize="$5" fontWeight="600" color="$color12">
          {title}
        </Text>
        <Text fontSize="$3" color="$color11">
          Paid by {paidBy} • {date}
        </Text>
      </YStack>

      {/* Amount and Split Info */}
      <YStack alignItems="flex-end" gap="$1">
        <Text fontSize="$5" fontWeight="600" color="$color12">
          ${amount.toFixed(2)}
        </Text>
        <XStack
          backgroundColor="$color3"
          paddingHorizontal="$2"
          paddingVertical="$1"
          borderRadius="$2"
          borderWidth={1}
          borderColor="$borderColor"
        >
          <Text fontSize="$2" color="$color11">
            Split {splitBetween}
          </Text>
        </XStack>
      </YStack>
    </XStack>
  )
}
