import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { YStack, XStack, Button, H2, Input, Label, Paragraph, Spinner, Card } from 'tamagui'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const onSignUpPress = async () => {
    if (!isLoaded) return
    setLoading(true)

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setPendingVerification(true)
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
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
        router.replace('../')
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2))
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
          elevate
          bordered
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
            {loading ? <Spinner color="$color" /> : 'Verify Email'}
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
      <Card
        elevate
        bordered
        width="100%"
        maxWidth={450}
        padding="$6"
        gap="$4"
        backgroundColor="$background"
      >
        <H2 textAlign="center" color="$color12">
          Create your account
        </H2>

        <XStack gap="$3">
          <YStack flex={1} gap="$3">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="John"
              value={firstName}
              onChangeText={setFirstName}
              size="$4"
            />
          </YStack>

          <YStack flex={1} gap="$3">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              value={lastName}
              onChangeText={setLastName}
              size="$4"
            />
          </YStack>
        </XStack>

        <YStack gap="$3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="email@example.com"
            value={emailAddress}
            onChangeText={setEmailAddress}
            keyboardType="email-address"
            autoCapitalize="none"
            size="$4"
          />
        </YStack>

        <YStack gap="$3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            size="$4"
          />
        </YStack>

        <Button
          theme="blue"
          size="$4"
          disabled={loading}
          onPress={onSignUpPress}
          marginTop="$2"
        >
          {loading ? <Spinner color="$color" /> : 'Create Account'}
        </Button>

        <XStack justifyContent="center" gap="$2" marginTop="$4">
          <Paragraph color="$color11">Already have an account?</Paragraph>
          <Link href="/sign-in">
            <Paragraph color="$blue10" textDecorationLine="underline">
              Sign in
            </Paragraph>
          </Link>
        </XStack>
      </Card>
    </YStack>
  )
}
