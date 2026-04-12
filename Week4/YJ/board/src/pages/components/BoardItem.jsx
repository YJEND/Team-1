import React, { useState } from 'react'; // 1. useState 추가
import "../../styles/Item.scss";

function BoardItem({ post, deletePost, updatePost }) {
  const [isEdit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(post.content);

  // 수정 완료 처리 함수
  const handleUpdate = () => {
    updatePost(post.id, editContent); // 부모 컴포넌트의 update 함수 호출
    setEdit(false); // 수정 모드 종료
  };

  return (
    <li className='board-item'>
      <div className='item-content'>
        <h4 className='item-title'>{post.title}</h4>
        {isEdit ? (
          <textarea 
            value={editContent} 
            onChange={(e) => setEditContent(e.target.value)} // 2. 화살표 함수 오타 수정
          />
        ) : (
          <p className='item-text'>{post.content}</p>
        )}
      </div>

      <div className='item-buttons'>
        {isEdit ? (
          <>
            {/* 수정 모드일 때 보여줄 버튼 */}
            <button type='button' onClick={handleUpdate}>저장</button>
            <button type='button' onClick={() => setEdit(false)}>취소</button>
          </>
        ) : (
          <>
            {/* 일반 모드일 때 보여줄 버튼 */}
            <button className='item-update' onClick={() => setEdit(true)}>수정</button>
            <button className='item-delete' onClick={() => deletePost(post.id)}>삭제</button>
          </>
        )}
      </div>
    </li>
  );
}

export default BoardItem;