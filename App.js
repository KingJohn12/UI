import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "next") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Next Page</Text>
        <Button title="Go Back" onPress={() => setScreen("home")} />
      </View>
    );
  }

  if (screen === "import") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Import Data</Text>
        <Button title="Go Back" onPress={() => setScreen("home")} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button title="Start" onPress={() => setScreen("next")} />
      <View style={{ height: 20 }} />
      <Button title="Import Data" onPress={() => setScreen("import")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
});
