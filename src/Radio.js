import React, { useState } from "react";
import { Component } from "react";
import {Form} from "react-bootstrap";

// class App extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         theme: "light"
//       }
//     }
//     render() {
//       return <div onChange={(e) => this.setState({theme: e.target.value})}>
//                 <input type="radio" name="theme" value="DARK"/>Dark
//                 <input type="radio" name="theme" value="LIGHT"/>Light
//              </div>;
//     }
//   }

// export default App;

function Radio() {
    const [gender,setGender] = useState('');

    const onGenderHandler = (e) => {
        setGender(e.target.value);
    }
    
    return(
        <Form>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="1"
              name="group1"
              type={type}
              id={`inline-${type}-1`
            }
            />
            <Form.Check
              inline
              label="2"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label="3"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
          </div>
        ))}
      </Form>
    )
}

export default Radio;