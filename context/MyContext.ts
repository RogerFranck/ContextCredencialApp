import { createContext } from "react";
import { employee } from "../Interface/employee";

const MyContext = createContext<employee>({
  ChangeInfo: () => {},
  nombre: "",
  date: "",
  puesto: "",
  email: "",
  telefono: "",
  foto: "",
});

export default MyContext;