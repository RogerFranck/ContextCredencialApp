import { ReactNode, useReducer } from "react";
import { employee } from "../Interface/employee";
import MyReducer from "./MyReducer";
import MyContext from "./MyContext";

interface props {
  children: ReactNode
}

export default function MyState({ children }: props) {

  const ChangeInfo = (key: string, value: string) => {
    dispatch({
      type: "CHANGE_INFO",
      payload: {
        key,
        value,
      },
    });
  };

  const initialState: employee = {
    ChangeInfo,
    nombre: "Eren Yeager",
    date: "3/30/850",
    puesto: "Titan de ataque",
    email: "ErenYeager@eldia.com",
    telefono: "9999999999",
    foto: "https://super-ficcion.com/wp-content/uploads/2022/02/Eren-Jaeger-780x470.webp",
  };

  const [state, dispatch] = useReducer(MyReducer, initialState);

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