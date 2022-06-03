import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Tasks } from './screens/Tasks.jsx'
import { gStyles } from './assets/globalStyles'

export default function App() {
  return (
    <View styles={styles.container}>
      <Tasks />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
