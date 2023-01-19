import React, {useState} from "react";


function Toggle(){
  const [isOn, setIsOn] = useState(true)
  function Handle(){
    setIsOn((isOn) => !isOn)
  }
  return <button onClick={Handle}>{isOn ? "OFF": "ON"}</button>
}

export default Toggle;
