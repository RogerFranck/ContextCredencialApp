import { createContext } from "react";
import { employee } from "../Interface/employee";

const MyContext = createContext<employee>({
  nombre: "",
  fechaNacimiento: "",
  puesto: "",
  email: "",
  telefono: "",
  foto: "",
});

export default MyContext;
