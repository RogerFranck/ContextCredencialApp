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
      ChangeInfo('date', date?.toLocaleDateString());
    }
  };

  const updateDateForm = () => {
    for (const [key, value] of Object.entries(state)) {
      ChangeInfo(key, key != 'date' ? value : value.toLocaleDateString())
     }
  ;}

  return {
    show,
    setShow,
    onChange,
    updateDateForm
  };
}
