import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { Button } from 'tamagui'

/**
 * Sign Out Button Component
 *
 * Migrated to use Tamagui Button component.
 * Uses the app's theme colors automatically via TamaguiProvider.
 */
export const SignOutButton = () => {
  const { signOut } = useClerk()

  const handleSignOut = async () => {
    try {
      await signOut()
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <Button
      size="$4"
      onPress={handleSignOut}
      variant="outlined"
      fontWeight="600"
    >
      Sign Out
    </Button>
  )
}
