import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Signup() {
  const router = useRouter();

  const handleLogin = () => {
    // Login muvaffaqiyatli bo'lsa Tablarga o'tamiz
    router.replace("/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Page</Text>
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={{ color: "#fff" }}>Sign-up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  btn: { backgroundColor: "#004CFF", padding: 15, borderRadius: 10 },
});
