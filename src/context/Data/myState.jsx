import React, { useState } from "react";
import MyContext from "./MyContext.jsx";

function MyState(props) {
  const [mode, setmode] = useState("light");
  const togole = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <MyContext.Provider value={{ mode, togole }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
