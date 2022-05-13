import React, { useImperativeHandle } from "react";

// useImperativeHandle 사용법
// useImperativeHandler(ref, createHandle, [deps])
// forwardRef와 함께 사용하기

function UseImperativeHandle(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
          //2. inputRef...에서 호출할 수 있음
        inputRef.current.focus();
      }
    })
  );

    // 1. input ref={inputRef}를 렌더링한 부모 컴포넌트를
    return <input ref={inputRef} ... />; //왜 오류!? props 가져온 게 없어서?
  }

  FancyInput = forwardRef(FancyInput);

  export default UseImperativeHandle;