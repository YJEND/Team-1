import React from 'react'
<<<<<<< HEAD
import "../../styles/Form.scss"

export const BoardForm = ({addPost}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title: e.target.elements.title.value,
            content: e.target.elements.content.value
        };

        addPost(newPost);
        e.target.reset();
    };

    return (
    <form className = "board-form" onSubmit = {handleSubmit}>
        <input className = "board-title" type="text" name = "title" placeholder="제목을 입력하세요" />
        <input className = "board-content" type="text" name = "content" placeholder="내용을 입력하세요" />
        <button className = "board-submit" type="submit" >추가하기</button>
=======
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
>>>>>>> refs/rewritten/recover
    </form>
  )
}
