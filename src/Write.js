import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './Write.css';
import { Alert } from 'react-bootstrap';

function Write() {
    let [title, setTitle] = useState('');
    let [contents, setContents] = useState('');

    let [titleError, setTitleError] = useState(false);
    let [contentsError, setContentsError] = useState(false);

    let history = useHistory();

    const onSave = (e) => {
        e.preventDefault();
        if(title.length < 5) {
            return setTitleError(true);
        }
        if(contents.length < 10) {
            return setContentsError(true);
        }
        console.log({
            title,
            contents
        });
        window.location.replace("/community")
    };

    const onTitleHandler = (e) => {
        setTitle(e.target.value);
        setTitleError(e.target.value < 0);
    }

    const onContentsHandler = (e) => {
        setContents(e.target.value);
        setContentsError(e.target.value < 0);
    }

    return(
    <div className="write">

        {titleError ? <div style={{color:'white', background:'red', width:'500px', margin:'auto'}}>제목을 5글자 이상 입력해주세요</div> : null}
        {contentsError ? <div style={{color:'white', background:'red', width:'500px', margin:'auto'}}>내용을 10글자 이상 입력해주세요</div> : null}

        <input type="text" className="title" value={title} placeholder="제목을 입력해주세요" maxLength='10' onChange={onTitleHandler} title={title}/>

        <p/><input type="text" className="contents" value={contents} placeholder="내용을 입력해주세요" maxLength='500' onChange={onContentsHandler} contents={contents}/>

        <p/><button type="submit" onClick={onSave}>저장</button>
        
        <button onClick={()=>{
            history.goBack();
        }}>뒤로가기</button>
    </div>)
}

export default Write;