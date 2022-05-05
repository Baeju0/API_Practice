import {React, useRef} from "react";

//useReducer? useRef?
function TextInput() {
    const input1 = useRef(null);
    const onButtonClick = () => {
        input1.currunt.focus();
    };
    return (
        <>
        <input ref={input1} type="text"/>
        <button onClick={onButtonClick}>Focus input</button>
        </>
    );
}

export default TextInput;