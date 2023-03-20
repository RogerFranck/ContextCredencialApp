import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyContext from "./context/MyContext";
import { initialState } from "./context/MyState";
import Home from "./views/Home";

export default function App() {
  return (
    <MyContext.Provider value={initialState}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </MyContext.Provider>
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
