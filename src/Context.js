import React, { createContext, useContext } from "react";

// useContext Hooks
// context 객체 생성
// context는 일일이 props를 하지 않고 컴포넌트 트리 전체에 데이터 제공 가능?

const ThemeContext = createContext('black');

function Context() {
    const theme = useContext(ThemeContext);
    const style = {
        width: '25px',
        height: '25px',
        background: theme
    };
    return (
        <div style={style}/>
    );
};

export default Context;