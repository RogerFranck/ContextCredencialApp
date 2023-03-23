import { employee } from "../Interface/employee";

type Action = {
  type: "CHANGE_INFO";
  payload: {
    key: string;
    value: any;
  };
};

const initialState: employee = {
  nombre: "Eren Yeager",
  fechaNacimiento: "3/30/850",
  puesto: "Titan de ataque",
  email: "ErenYeager@eldia.com",
  telefono: "9999999999",
  foto: "https://super-ficcion.com/wp-content/uploads/2022/02/Eren-Jaeger-780x470.webp",
};

function reducer(state: employee, action: Action): employee {
  switch (action.type) {
    case "CHANGE_INFO":
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      throw new Error("Invalid action type");
  }
}

export { reducer, initialState };