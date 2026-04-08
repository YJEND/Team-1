import React from 'react'
import "../../styles/Item.scss"

export const BoardItem = ({post, deletePost}) => {

  return (
    <li className='board-item'>
        <div className='item-content'>
            <h4 className='item-title'>{post.title}</h4>
            <p className='item-content'>{post.content}</p>
        </div>
        <button className='item-delete' onClick = {() => deletePost(post.id)}>삭제</button>
    
    </li>
  )
}
