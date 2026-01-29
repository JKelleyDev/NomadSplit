import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Link href="/(auth)/sign-in">
        <Text style={styles.link}>Go to Sign In</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 20,
    color: 'blue',
  },
})
