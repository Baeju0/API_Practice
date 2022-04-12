import React from "react";
import { ReactDOM } from "react";

function IFRender() {

function UserGreeting(props) {
    return <h1>안녕~!!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>로그인 페이지로 가!</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  // eslint-disable-next-line no-undef
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
}

export default IFRender;