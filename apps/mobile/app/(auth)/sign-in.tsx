import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { YStack, XStack, Button, H2, Input, Label, Paragraph, Spinner, Card } from 'tamagui'

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const onSignInPress = async () => {
    if (!isLoaded) return
    setLoading(true)

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('../')
      } else if (signInAttempt.status === 'needs_second_factor') {
        await signIn.prepareSecondFactor({
          strategy: 'email_code',
        })
        setPendingVerification(true)
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    } finally {
      setLoading(false)
    }
  }

  const onVerifyPress = async () => {
    if (!isLoaded) return
    setLoading(true)

    try {
      const signInAttempt = await signIn.attemptSecondFactor({
        strategy: 'email_code',
        code,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('../')
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    } finally {
      setLoading(false)
    }
  }

  if (pendingVerification) {
    return (
      <YStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding="$4"
        backgroundColor="$background"
      >
        <Card
          width="100%"
          maxWidth={450}
          padding="$6"
          gap="$4"
          backgroundColor="$background"
        >
          <H2 textAlign="center" color="$color12">
            Verify Your Email
          </H2>
          <Paragraph textAlign="center" color="$color11">
            Enter the verification code sent to {emailAddress}
          </Paragraph>

          <YStack gap="$3">
            <Label htmlFor="code">Verification Code</Label>
            <Input
              id="code"
              placeholder="000000"
              value={code}
              onChangeText={setCode}
              keyboardType="numeric"
              size="$4"
            />
          </YStack>

          <Button
            theme="blue"
            size="$4"
            disabled={loading}
            onPress={onVerifyPress}
            marginTop="$2"
          >
            {loading ? <Spinner color="$color" /> : 'Verify & Sign In'}
          </Button>
        </Card>
      </YStack>
    )
  }

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$4"
      backgroundColor="$background"
    >

      <Card>
        
        <Card.Header/>
          <H2 textAlign='center'>Sign in to NomadSplit</H2>
          <Label htmlFor="email" >Email</Label>
          <Input
            id="email"
            placeholder="email@example.com"
            value={emailAddress}
            onChangeText={setEmailAddress}
            keyboardType="email-address"
            autoCapitalize="none"
            type="email"
            size="$4"
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            type="password"
            size="$4"
          />
        <Card.Footer paddingVertical="$4" alignItems="center" justifyContent="center">
          <Button
            disabled={loading}
            onPress={onSignInPress}
            width="100%"
          >
            {loading ? <Spinner color="$color" /> : 'Sign In'}
          </Button>
        </Card.Footer>
      </Card>


        <XStack justifyContent="center" gap="$2" marginTop="$4">
          <Paragraph color="$color11">Don't have an account?</Paragraph>
          <Link href="/sign-up">
            <Paragraph color="$blue10" textDecorationLine="underline">
              Sign up
            </Paragraph>
          </Link>
        </XStack>
    </YStack>
  )
}
