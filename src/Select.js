import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Select() {
    const [area,setArea] = useState();

    const onAreaHandler = (e) => {
        setArea(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
           area
          });
        }
        
    return(
        <div>
        <Form.Select>
        <option>지역</option>
        <option value="1" onChange={onAreaHandler}>One</option>
        <option value="2" onChange={onAreaHandler}>Two</option>
        <option value="3" onChange={onAreaHandler}>Three</option>
        </Form.Select>

        <button type="submit" className="sign">횐가입</button>
        </div>
    )
}

export default Select;