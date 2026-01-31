import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

/**
 * Sign Out Button Component
 * Styled button that allows users to sign out of their account
 * Matches the app's nature-themed design system
 */
export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()

  // Handle sign out and redirect to landing page
  const handleSignOut = async () => {
    try {
      await signOut()
      // Redirect to landing page after sign out
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      // See Clerk docs: custom flows error handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleSignOut}>
      <Text style={styles.buttonText}>Sign Out</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // Sign out button with secondary styling (outlined)
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2E7D32',
    alignItems: 'center',
  },
  buttonText: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: '600',
  },
})
