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
      <Result fullInput={fullInput} />
    </>
  )
}

export default App
