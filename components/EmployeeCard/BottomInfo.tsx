import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import MyContext from "../../context/MyContext";
import Label from "../General/Label";

export default function BottomInfo() {
  const { email, telefono, fechaNacimiento } = useContext(MyContext);
  return (
    <View style={styles.bgWhite}>
      <View>
        <Label tittle="Email" description={email} />
        <Label tittle="Phone" description={telefono} />
      </View>
      <View>
        <Label tittle="D.O.B" description={fechaNacimiento} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
});
