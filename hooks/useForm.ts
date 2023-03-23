import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import MyContext from "../context/MyContext";

export default function useForm() {
  const state2 = useContext(MyContext);
  console.log(state2);
  const [state, setstate] = useState({
    nombre: "",
    date: new Date(),
    puesto: "",
    email: "",
    telefono: "",
    image: "",
  });
  const [bloqueado, setbloqueado] = useState(false);

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
    if (!bloqueado) {
      //! Actualizar context
    }
  };

  return {
    state,
    pickImage,
    handleChange,
    setstate,
    setbloqueado,
    bloqueado,
  };
}