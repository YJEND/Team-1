import { useState } from 'react';
import styles from "../../styles/Item.module.scss";

function BoardItem({ post, deletePost, updatePost }) {
  const [isEdit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(post.content);

  const handleUpdate = () => {
    updatePost(post.id, editContent);
    setEdit(false);
  };

  return (
    <li className={styles.boardItem}>
      <div className={styles.itemContent}>
        <h4 className={styles.itemTitle}>{post.title}</h4>
        {isEdit ? (
          <textarea
            className={styles.editTextarea}
            value={editContent} 
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <p className={styles.itemText}>{post.content}</p>
        )}
      </div>

      <div className={styles.itemButtons}>
        {isEdit ? (
          <>
            <button className={styles.itemSave} type='button' onClick={handleUpdate}>저장</button>
            <button className={styles.itemCancel} type='button' onClick={() => setEdit(false)}>취소</button>
          </>
        ) : (
          <>
            <button className={styles.itemUpdate} type='button' onClick={() => setEdit(true)}>수정</button>
            <button className={styles.itemDelete} type='button' onClick={() => deletePost(post.id)}>삭제</button>
          </>
        )}
      </div>
    </li>
  );
}

export default BoardItem;
