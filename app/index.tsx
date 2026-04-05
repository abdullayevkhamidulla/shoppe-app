import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.bagWrapper}>
        <Image
          source={require("../assets/images/bag.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Shoppe</Text>
      <Text style={styles.desc}>
        Beautiful eCommerce UI Kit for your online store
      </Text>

      <TouchableOpacity
        style={styles.startbtn}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.startbtnText}>Let's get started</Text>
      </TouchableOpacity>

      <View style={styles.linkwrapper}>
        <Text style={styles.linkText}>I already have an account</Text>
        <TouchableOpacity
          style={styles.linkbtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.linkbtnText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bagWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#787474",
    borderRadius: 67,
    width: 134,
    height: 134,
    padding: 10,
  },
  image: { width: 80, height: 80, resizeMode: "contain" },
  title: { marginTop: 10, fontSize: 52, fontWeight: "600" },
  desc: {
    fontSize: 19,
    paddingHorizontal: 60,
    color: "#202020",
    textAlign: "center",
    lineHeight: 33,
    fontWeight: "300",
    marginTop: 10,
  },
  startbtn: {
    paddingVertical: 17,
    paddingHorizontal: 83,
    backgroundColor: "#004CFF",
    borderRadius: 16,
    marginTop: 120,
  },
  startbtnText: { fontSize: 22, color: "#fff" },
  linkwrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  linkText: { fontSize: 15, color: "#625e5e" },
  linkbtn: {
    width: 40,
    height: 40,
    backgroundColor: "#004CFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  linkbtnText: { color: "#fff", fontWeight: "700", fontSize: 22 },
});
