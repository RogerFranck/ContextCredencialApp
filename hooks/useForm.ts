import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import MyContext from "../context/MyContext";

export default function useForm() {
  const { ChangeInfo } = useContext(MyContext);
  const [state, setstate] = useState({
    nombre: "",
    date: new Date(),
    puesto: "",
    email: "",
    telefono: "",
    foto: "",
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
        foto: result.assets[0].uri,
      });
      if (!bloqueado) {
        //! Actualizar context
        ChangeInfo('foto', result.assets[0].uri);
      }
    }
  };

  const handleChange = (key: string, value: string) => {
    setstate({
      ...state,
      [key]: value,
    });
    if (!bloqueado) {
      //! Actualizar context
      ChangeInfo(key, value);
      
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