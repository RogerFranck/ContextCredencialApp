import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MyContext from "../../context/MyContext";

export default function MidInfo() {
  const { nombre, puesto, foto } = useContext(MyContext);
  return (
    <View style={styles.flex}>
      <Image
        source={{
          uri: foto,
          width: 70,
          height: 70,
        }}
        style={styles.img}
      />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          {nombre}
        </Text>
        <Text> {puesto} </Text>
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    borderRadius: 40,
    marginRight: 50,
  },
  flex: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
