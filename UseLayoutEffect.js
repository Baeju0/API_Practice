import { useEffect, useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

// 렌더링 차이 useEffect, useLayoutEffect
// 렌더링 시간 단축

//   useEffect(() => {
//     setAge(23);
//     setName("주영");
// }, []);

  useLayoutEffect(() => {
      setAge(23);
      setName("주용");
  }, []);

return (
      <div>{`이름 : ${name}, 나이 : ${age}살 입니다.`}</div>
  );
}

export default UseLayoutEffect;