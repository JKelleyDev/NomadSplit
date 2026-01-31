import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { SignOutButton } from './components/SignOutButton'
import { LinearGradient } from 'expo-linear-gradient'

// Get screen dimensions for responsive design
const { width, height } = Dimensions.get('window')

export default function Page() {
  const { user } = useUser()

  return (
    <View style={styles.container}>
      {/* Signed In View - Show user dashboard */}
      <SignedIn>
        <View style={styles.dashboardContainer}>
          <Text style={styles.welcomeText}>Hello {user?.fullName}</Text>
          <SignOutButton />
        </View>
      </SignedIn>

      {/* Signed Out View - Show landing page with auth options */}
      <SignedOut>
        {/* Nature-themed gradient background */}
        <LinearGradient
          colors={['#2E7D32', '#558B2F', '#689F38']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.contentContainer}>
            {/* Logo and branding section */}
            <View style={styles.logoContainer}>
              <Text style={styles.logoIcon}>🌿</Text>
              <Text style={styles.logoText}>NomadSplit</Text>
              <Text style={styles.tagline}>
                Split expenses, share adventures
              </Text>
            </View>

            {/* Authentication buttons section */}
            <View style={styles.buttonContainer}>
              {/* Primary Sign Up button */}
              <Link href="/(auth)/sign-up" asChild>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Get Started</Text>
                </TouchableOpacity>
              </Link>

              {/* Secondary Sign In button */}
              <Link href="/(auth)/sign-in" asChild>
                <TouchableOpacity style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Sign In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </LinearGradient>
      </SignedOut>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Gradient background that fills the screen
  gradient: {
    flex: 1,
    width: width,
    height: height,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: height * 0.2, // 20% from top
    paddingBottom: 60,
  },
  // Logo and branding styles
  logoContainer: {
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    fontSize: 72,
    marginBottom: 8,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.95,
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  // Button container and button styles
  buttonContainer: {
    width: '100%',
    gap: 16,
    maxWidth: 400,
  },
  // Primary button (Get Started) - filled white background
  primaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#2E7D32',
    fontSize: 18,
    fontWeight: '600',
  },
  // Secondary button (Sign In) - outlined with transparent background
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  // Dashboard view for signed-in users
  dashboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#F5F5F5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 24,
  },
})
