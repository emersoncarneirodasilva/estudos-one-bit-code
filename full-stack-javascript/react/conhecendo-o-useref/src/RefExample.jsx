import { useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);

    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#6200ff30";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focar no Input</button>
    </div>
  );
}

export default RefExample;
