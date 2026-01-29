import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

/**
 * This layout is used specifically for the (auth) route group.
 * It acts as a "guard" to prevent authenticated users from 
 * accessing login/signup pages.
 */
export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  // If the user is already signed in, they don't need to see 
  // the login or signup screens. Redirect them to the home page.
  if (isSignedIn) {
    return <Redirect href={'/'} />
  }

  // If the user is not signed in, render the screens within this group 
  // (like sign-in.tsx or sign-up.tsx) using a Stack navigation.
  return <Stack />
}
