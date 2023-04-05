import { useState } from "react";
import NoteContext from "./noteContext";

function NoteSate(props) {
  const s1 = {
    name: "Sadid",
    age: 31,
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Sadid 2",
        age: 35,
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteSate;
