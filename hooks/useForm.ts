import { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import MyContext from "../context/MyContext";

export default function useForm() {
  const { ChangeInfo } = useContext(MyContext);
  const [stateErr,  setStateErr] = useState({
    nombre: {
      message: '',
    },
    email: {
      message: '',
    },
    telefono: {
      message: '',
    },
    foto: {
      message: '',
    },
  })

  const [state, setstate] = useState({
    nombre: "Eren Yeager",
    date: new Date(),
    puesto: "Titan de ataque",
    email: "ErenYeager@eldia.com",
    telefono: "9999999999",
    foto: "https://super-ficcion.com/wp-content/uploads/2022/02/Eren-Jaeger-780x470.webp",
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
    if (value.length == 0) {
      setStateErr({
        ...stateErr,
        [key]: { message: 'Error' }
      })
    } else {
      setStateErr({
        ...stateErr,
        [key]: { message: '' }
      })
    }
    switch (key) {
      case 'email':
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
          setStateErr({
            ...stateErr,
            email: { message: 'Error, email no valido' }
          })
        } else {
          setStateErr({
            ...stateErr,
            email: { message: '' }
          })
        }
        break;
      case 'telefono':
        if (!/^\d{10}$/.test(value)) {
          setStateErr({
            ...stateErr,
            telefono: { message: 'Error, telefono no valido' }
          })
        } else {
          setStateErr({
            ...stateErr,
            telefono: { message: '' }
          })
        }
        break;
      case 'foto':
        if (state.foto != "") {
          setStateErr({
            ...stateErr,
            foto: { message: 'Error, no hay foto'}
          })
        } else {
          setStateErr({
            ...stateErr,
            foto: { message: ''}
          })
        }
      default:
        break;
    }
    setstate({
      ...state,
      [key]: value,
    });
    if (!bloqueado) {
      //! Actualizar context
      ChangeInfo(key, value);
    }
  };

  const updateInfoForm = () => {
    for (const [key, value] of Object.entries(state)) {
     ChangeInfo(key, value)
    }
  }

  return {
    state,
    pickImage,
    handleChange,
    setstate,
    setbloqueado,
    bloqueado,
    updateInfoForm,
    stateErr
  };
}