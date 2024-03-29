import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import './Community.css';

function Community(props) {
    let co = { fontSize: "20px" };

    let [post, setPost] = useState(['첫번째 글']);
    let [modal, setModal] = useState(false);
    let [entry, setEntry] = useState('');
    // let [title, setTitle] = useState(['안녕하세요!']);

    function postAdd(props) {
        var newPost = [...post];
        newPost.unshift(props.title);
        setPost(newPost);
    }
    
    // function titleAdd() {
    //     var newTitle = [...title];
    //     newTitle.unshift(title);
    //     setTitle(newTitle);
    // }

    return(
      <div className='commu'>
          <div style={co}>커뮤니티 페이지<hr/></div>
          {post.map(function (post, i){
              return(
                <div className="list" key={i}>
                {post}
                <hr/>
                </div>
              );
          })
          }
        
        {/* assign() 파라미터로 전달한 URL에서 리소스를 로드 */}
          <button onClick={()=> {
              window.location.assign("/write");
          }}>글쓰기</button>
          
          {/* <p></p>
          {modal ? <input onChange={(e)=>{
              setEntry(e.target.value)
          }}/>: null}
        
          {modal ?<button onClick={(e)=> {
              postAdd(e)
          }}>저장</button>: null} */}
          </div>
    )
}

// function modal() {
//     return(
//     <div>z</div>)
// }

export default Community;