import React from 'react'

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
    <form onSubmit = {handleSubmit}>
        <input type="text" name = "title" placeholder="제목을 입력하세요" />
        <input type="text" name = "content" placeholder="내용을 입력하세요" />
        <button type="submit" >추가</button>
    </form>
  )
}
