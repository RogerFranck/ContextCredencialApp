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
import useDate from "../../hooks/useDate";

export default function Form() {
  const { state, setstate, pickImage, handleChange, setbloqueado, bloqueado, updateInfoForm, stateErr } = useForm();
  const { show, setShow, onChange, updateDateForm } = useDate(state, setstate, bloqueado);
  const { 
    nombre: { message: messageName },
    email: {  message: messageEmail }, 
    telefono: {  message: messageTelefono },
    foto: { message: messageFoto } } = stateErr
  return (
    <View style={styles.border}>
      <View style={styles.bodyTopText}>
        <Text>Estado: {bloqueado ? 'Bloqueado' : 'Desbloqueado'}</Text>
      </View>
      <View style={styles.bodyForm}>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          value={state.nombre}
          onChangeText={(value) => handleChange("nombre", value)}
        />
        <Text style={{ color: 'red' }}>{messageName}</Text>
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
        <Text style={{ color: 'red' }}>{messageEmail}</Text>
        <TextInput
          placeholder="TelÃ©fono"
          style={styles.input}
          onChangeText={(value) => handleChange("telefono", value)}
        />
        <Text style={{ color: 'red' }}>{messageTelefono}</Text>
        <View style={styles.parentBox}>
          <TouchableOpacity style={styles.inputImg} onPress={pickImage}>
            <Text style={styles.inputText}>Foto</Text>
          </TouchableOpacity>
          {state.foto && (
            <Image
              source={{ uri: state.foto }}
              style={{ width: 50, height: 50 }}
            />
          )}
        </View>
        <Text style={{ color: 'red' }}>{messageFoto}</Text>
        <View style={styles.parentBox}>
          <TouchableOpacity
          disabled= { (messageEmail || messageFoto || messageName || messageTelefono) ? true : false }
            style={[styles.button, bloqueado ? styles.buttonSeletected : styles.buttonNotSeletected]}
            onPress={() => {
              setbloqueado(true)
              if(bloqueado){               
                updateInfoForm()
                updateDateForm()
              }
            }}
          >
            <Text style={{ color: "white" }}>Bloquear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, !bloqueado ? styles.buttonSeletected : styles.buttonNotSeletected]}
            onPress={() => setbloqueado(false)}
          >
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
  bodyTopText: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-end",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 44,
    padding: 10,
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
    // backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonSeletected: {
    backgroundColor: "black",
  },
  buttonNotSeletected: {
    backgroundColor: "gray",
  },
});