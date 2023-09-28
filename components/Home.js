import { StyleSheet, Text, View, Alert, ImageBackground } from "react-native";
import { Button, TextInput, Switch, PaperProvider } from "react-native-paper";
import React, { useState } from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        icon="login"
        mode="contained"
        onPress={() => navigation.navigate("About")}
      >
        Go to About
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 250,
    height: 250,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    width: "60%",
    marginVertical: 10,
    alignItems: "stretch",
  },
});

export default Home;
