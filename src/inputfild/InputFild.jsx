import "./inputFild.css";
import { useState } from "react";

export default function InputFild({ setList }) {
    const [inputText, setInputText] = useState("");
    const inputItem = (e) => {
    setInputText(e.target.value);
    };
    console.log("inputText : ", inputText);

    const addItem = () => {
    if (inputText.trim().length < 2) {
        alert(
        inputText.trim() == ""
            ? "내용을 입력해주세요"
            : "2글자 이상 입력해주세요"
        );
        document.querySelector(".tripInput").focus();
        return;
    }

    setList((prev) => {
    const newList = [inputText, ...prev];
    localStorage.setItem("tripLists",JSON.stringify(newList));
    return newList;
    });


    setInputText("");
    document.querySelector(".tripInput").focus();
    };
    const handleKeyUp = (e) => {
    if (e.key === "Enter") {
        addItem();
    }
    };

  return (
    <div className="inputfild mw">
      <input
        className="tripInput"
        value={inputText}
        type="text"
        placeholder="서울 핫플 입력"
        onChange={inputItem}
        onKeyUp={handleKeyUp}
      ></input>
      <button onClick={addItem}>검색</button>
    </div>
  );
} 
