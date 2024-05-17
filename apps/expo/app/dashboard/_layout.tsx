import { Stack } from 'expo-router'
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <Provider>
      <StatusBar />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: 'My Robot Heards' }}
        />
        <Stack.Screen
          name="dashboard"
          options={{ headerShown: true, title: 'Dashboard' }}
        />
      </Stack>
    </Provider>
  )
}
