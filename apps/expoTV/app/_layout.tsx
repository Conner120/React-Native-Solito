import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Provider } from 'app/provider';
import { StatusBar } from 'expo-status-bar';
import { getCurrentUser, getIdToken } from 'app/features/auth';

export default function App() {
  const router = useRouter();
  useEffect(() => {
    getIdToken().then((token) => {
      console.log('Token', token);
      if (token) {
        router.replace('dashboards');
      }
    });
  }, []);
  return (
    <Provider>
      <StatusBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="dashboards" options={{ headerShown: true }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
        <Stack.Screen name="verify-otp" options={{ headerShown: false }} />
        <Stack.Screen name="create-password" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
