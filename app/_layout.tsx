import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Start sahifasi */}
      <Stack.Screen name="index" />
      {/* Ro'yxatdan o'tish */}
      <Stack.Screen name="signup" />
      {/* Kirish */}
      <Stack.Screen name="login" />
      {/* Tablar guruhi */}
      <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
    </Stack>
  );
}
