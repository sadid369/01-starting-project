import React, { useContext, useEffect } from "react";
import noteContext from "./noteContext";
function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <>
      <>
        My Name is {a.state.name} age is {a.state.age}
      </>
    </>
  );
}

export default About;
<></>;
