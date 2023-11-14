import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card bg="red">
        <Text>Getting started with Github Action!!</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
