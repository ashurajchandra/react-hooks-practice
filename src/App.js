import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const inputValue = useRef(null);
  const [inputText, setInputText] = useState("i am input");
  console.log("inputValue", inputValue);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    inputValue.current.focus();
    alert("i am submitted");
  };

  return (
    <div className="App">
      <h1>Lets learn about useRef hook</h1>
      <form>
        <input
          type="text"
          ref={inputValue}
          placeholder="current prop"
          value={inputText}
        />
        <button onClick={onSubmitHandler}>Focus Input</button>
      </form>
    </div>
  );
}
