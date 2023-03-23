import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { useState, useContext } from "react";
import MyContext from "../context/MyContext";

interface state {
    nombre: string,
    date: Date,
    puesto: string,
    email: string,
    telefono: string,
    foto: string,
}

export default function useDate(state: state, setstate: Function, bloqueado: boolean) {
  const { ChangeInfo } = useContext(MyContext);
  const [show, setShow] = useState(false);
  const onChange = (event: DateTimePickerEvent, date?: Date) => {
    setShow(false);
    setstate({
      ...state,
      date,
    });

    if (!bloqueado) {
      //! Actualizar context
      ChangeInfo('fechaNacimiento', date?.toDateString());
    }
  };
  return {
    show,
    setShow,
    onChange,
  };
}
