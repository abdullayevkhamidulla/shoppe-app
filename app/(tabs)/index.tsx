import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Myapp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bagWrapper}>
        <Image source={require("../../assets/images/bag.png")} />
      </View>
      <Text style={styles.title}>Shoppe</Text>
      <Text style={styles.desc}>
        Beautiful eCommerce UI Kit for your online store
      </Text>
      <TouchableOpacity style={styles.startbtn}>
        <Text style={styles.startbtnText}>Let's get started</Text>
      </TouchableOpacity>

      <View style={styles.linkwrapper}>
        <Text style={styles.linkText}>I already have an account</Text>
        <TouchableOpacity style={styles.linkbtn}>
          <Text style={styles.linkbtnText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Myapp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  bagWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#787474",
    borderStyle: "solid",
    borderRadius: "50%",
    width: 134,
    height: 134,
    padding: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 52,
    fontWeight: 600,
  },
  desc: {
    fontSize: 19,
    paddingHorizontal: 60,
    color: "#202020",
    textAlign: "center",
    lineHeight: 33,
    fontWeight: 300,
    marginTop: 10,
  },
  startbtn: {
    paddingVertical: 17,
    paddingHorizontal: 83,
    backgroundColor: "#004CFF",
    borderRadius: 16,
    marginTop: 122,
  },
  startbtnText: {
    fontSize: 22,
    color: "#fff",
  },
  linkwrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 19,
  },
  linkText: {
    fontSize: 15,
    color: "#625e5e",
  },
  linkbtn: {
    width: 33,
    height: 33,
    backgroundColor: "#004CFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  linkbtnText: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 22,
  },
});
