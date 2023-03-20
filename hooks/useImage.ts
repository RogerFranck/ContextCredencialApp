import React, { useState } from "react";

export default function useImage(state: any, setstate: any) {
  const [show, setShow] = useState(false);
  const onChange = (event: any, selectedDate: any) => {
    setShow(false);
    setstate({
      ...state,
      date: selectedDate,
    });
  };
  return {
    show,
    setShow,
    onChange,
  };
}
