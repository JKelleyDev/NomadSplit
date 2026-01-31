import { Stack } from 'expo-router'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'

/**
 * Clerk's tokenCache is used to persist the user's session tokens
 * on the device using Expo's SecureStore. This ensures the user 
 * remains logged in even after closing the app.
 */
const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

// Ensure the Publishable Key is available from the .env file
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

/**
 * RootLayout is the top-level component of the app. 
 * It wraps the entire navigation tree with the ClerkProvider 
 * to make authentication context available everywhere.
 */
export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      {/* ClerkLoaded ensures that the Clerk state is initialized before rendering the app UI */}
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          {/* (auth) is a route group. We hide its header because it will have its own layout/screens. */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          {/* index is the default home screen - no header for full screen experience */}
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  )
}