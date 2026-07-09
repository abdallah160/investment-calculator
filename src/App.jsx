import Header from "./Header"
import InputArea from "./InputArea"
import { useState } from "react";
import Result from "./Result";

function App() {
  const [fullInput, setfullInput] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  });

  let inputIsValid = (Number(fullInput.duration >= 1));
  function handleInputChange(e) {
    setfullInput((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value
      }
    });
  }

  return (
    <>
      <Header />
      <InputArea handleInputChange={handleInputChange} />
      {inputIsValid ? <Result fullInput={fullInput} /> : <p className="center">Please fill all data and enter a positive duration</p>}
    </>
  )
}

export default App
