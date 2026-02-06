import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Dimensions } from 'react-native'
import { YStack, Button, H1, H2 } from 'tamagui'
import { SignOutButton } from './components/SignOutButton'
import LottieView from 'lottie-react-native'
import { useRef } from 'react'
import { themes } from '../themes'

const { height } = Dimensions.get('window')

export default function Page() {
  const { user } = useUser()
  const animation = useRef<LottieView>(null)

  return (
    <YStack flex={1} backgroundColor="$background">
      {/* Signed In View - Show user dashboard */}
      <SignedIn>
        <YStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          padding="$8"
          backgroundColor="$background"
        >
          <H2 color="$color12" fontWeight="600" marginBottom="$6">
            Hello {user?.fullName}
          </H2>
          <SignOutButton />
        </YStack>
      </SignedIn>

      {/* Signed Out View - Show landing page with auth options */}
      <SignedOut>
        <YStack
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          paddingHorizontal="$8"
          paddingTop={height * 0.15}
          paddingBottom={height * 0.15}
        >
          {/* Logo and branding section */}
          <YStack alignItems="center" gap="$4" width="100%" maxWidth={500}>
            <LottieView
              ref={animation}
              source={require('../assets/travel-animation.json')}
              autoPlay
              loop
              style={{ width: 250, height: 250, maxWidth: '100%', backfaceVisibility: 'visible' }}
            
            />
            <H1 size="$10" fontWeight="700">
              NomadSplit
            </H1>
            <H2
              size="$6"
              textAlign="center"
              fontWeight="400"
            >
              Split expenses, share adventures
            </H2>
          </YStack>

          {/* Authentication buttons section */}
          <YStack width="100%" gap="$4" maxWidth={400}>
            <Link href="/(auth)/sign-up" asChild>
              <Button>
                Get Started
              </Button>
            </Link>

            <Link href="/(auth)/sign-in" asChild>
              <Button>
                Sign In
              </Button>
            </Link>
          </YStack>
        </YStack>
      </SignedOut>
    </YStack>
  )
}
