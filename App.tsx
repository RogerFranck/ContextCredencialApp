import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyState from "./context/MyState";
import Home from "./views/Home";

export default function App() {
  return (
    <MyState>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </MyState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
});