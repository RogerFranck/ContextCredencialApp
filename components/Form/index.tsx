import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import useForm from "../../hooks/useForm";
import useImage from "../../hooks/useImage";

export default function Form() {
  const { state, setstate, pickImage, handleChange } = useForm();
  const { show, setShow, onChange } = useImage(setstate, state);
  return (
    <View style={styles.border}>
      <View style={styles.bodyForm}>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          value={state.nombre}
          onChangeText={(value) => handleChange("nombre", value)}
        />
        <TouchableOpacity style={styles.input} onPress={() => setShow(true)}>
          {show && (
            <DateTimePicker
              value={state.date}
              mode="date"
              onChange={onChange}
            />
          )}
          <Text style={styles.inputText}>
            Fecha de nacimiento: {state.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        <Picker
          style={styles.inputSelect}
          selectedValue={state.puesto}
          onValueChange={(value) => handleChange("puesto", value)}
        >
          <Picker.Item label="Gerente" value="Gerente" />
          <Picker.Item label="Desarrollador jr" value="Desarrollador jr" />
          <Picker.Item label="Desarrollador sr" value="Desarrollador sr" />
          <Picker.Item label="Soporte" value="Soporte" />
          <Picker.Item label="Lider de proyecto" value="Lider de proyecto" />
        </Picker>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(value) => handleChange("email", value)}
        />
        <TextInput
          placeholder="Teléfono"
          style={styles.input}
          onChangeText={(value) => handleChange("telefono", value)}
        />
        <View style={styles.parentBox}>
          <TouchableOpacity style={styles.inputImg} onPress={pickImage}>
            <Text style={styles.inputText}>Foto</Text>
          </TouchableOpacity>
          {state.image && (
            <Image
              source={{ uri: state.image }}
              style={{ width: 50, height: 50 }}
            />
          )}
        </View>
        <View style={styles.parentBox}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Bloquear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}> Desbloquear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: "100%",
    backgroundColor: "black",
    padding: 2,
    marginBottom: 10,
  },
  bodyForm: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    backgroundColor: "#e8e8e8",
  },
  inputSelect: {
    width: "100%",
    marginTop: 7.5,
    marginBottom: 7.5,
    backgroundColor: "#e8e8e8",
    color: "#666666",
  },
  inputText: {
    color: "#666666",
  },
  inputImg: {
    width: "60%",
    height: 44,
    padding: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
  },
  parentBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
});
