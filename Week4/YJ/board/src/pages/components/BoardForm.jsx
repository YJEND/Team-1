import React from 'react'
import { useState } from "react";
import "../../styles/Form.scss"

export const BoardForm = ({addPost}) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ id: Date.now(), title, content });
        setTitle(""); 
        setContent(""); 
    };


    return (
    <form className="board-form" onSubmit = {handleSubmit}>
        <input className="board-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요"/>
        <input className="board-content" type="text" value = {content} onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력하세요" />
        <button className="board-submit" type="submit" >추가하기</button>
    </form>
  )
}
