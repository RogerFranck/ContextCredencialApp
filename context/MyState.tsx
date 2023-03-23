import { useReducer } from "react";
import { employee } from "../Interface/employee";
import MyReducer from "./MyReducer";
import MyContext from "./MyContext";

export default function MyState({ children }: any) {
  const initialState: employee = {
    nombre: "Eren Yeager",
    fechaNacimiento: "3/30/850",
    puesto: "Titan de ataque",
    email: "ErenYeager@eldia.com",
    telefono: "9999999999",
    foto: "https://super-ficcion.com/wp-content/uploads/2022/02/Eren-Jaeger-780x470.webp",
  };

  const [state, dispatch] = useReducer(MyReducer, initialState);

  const ChangeInfo = (key: string, value: any) => {
    dispatch({
      type: "CHANGE_INFO",
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <MyContext.Provider
      value={{
        ...state,
        ChangeInfo,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}