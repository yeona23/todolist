import "./Body.css";
import { useRef, useState } from "react";

const Body = () => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료!</button>
    </>
  );
};

Body.defaultProps = {
  favorList: [],
};

export default Body;
