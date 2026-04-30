import { useState } from "react";
import styles from "../../styles/Form.module.scss";

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
    <form className={styles.boardForm} onSubmit = {handleSubmit}>
        <input className={styles.boardTitle} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요"/>
        <input className={styles.boardContent} type="text" value = {content} onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력하세요" />
        <button className={styles.boardSubmit} type="submit" >추가하기</button>
    </form>
  )
}
