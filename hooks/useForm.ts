import { useReducer, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { initialState, reducer } from "../context/MyState";

export default function useForm() {
  const [stateContext, dispatch] = useReducer(reducer, initialState);

  const [state, setstate] = useState({
    nombre: "",
    date: new Date(),
    puesto: "",
    email: "",
    telefono: "",
    image: "",
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setstate({
        ...state,
        image: result.assets[0].uri,
      });
    }
  };

  const handleChange = (key: string, value: string) => {
    setstate({
      ...state,
      [key]: value,
    });
    dispatch({
      type: "CHANGE_INFO",
      payload: {
        key,
        value,
      },
    });
  };

  return {
    state,
    pickImage,
    handleChange,
    setstate,
  };
}
