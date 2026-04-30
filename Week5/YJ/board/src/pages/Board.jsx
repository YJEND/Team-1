import { useState } from "react";
import { BoardForm } from "./components/BoardForm.jsx";
import { BoardList } from "./components/BoardList.jsx";
import BoardItem from "./components/BoardItem.jsx";
import styles from "../styles/Board.module.scss";

function Board() {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫번째 글", content: "첫번째 글 내용입니다." },
    { id: 2, title: "두번째 글", content: "두번째 글 내용입니다." },
    { id: 3, title: "세번째 글", content: "세번째 글 내용입니다." }
  ]);

  const addPost = (newPost) =>{
    setPosts([...posts, newPost]);
  }
  
  const deletePost = (targetId) => {
    const filterPost = posts.filter((post) => post.id !== targetId)
    setPosts(filterPost);
  }

 const updatePost = (targetId, nextContent) => {
    setPosts(
      posts.map((item) =>
        item.id === targetId ? { ...item, content: nextContent } : item
      )
    );
  };

  return (
    <div className={styles.board}>
      <h2>📝 자유 게시판</h2>

      <div className={styles.formSection}>
        <h3>게시글 작성 영역 (BoardForm)</h3>
        <BoardForm addPost={addPost} /*posts={posts}*/ />
      </div>

      <div className={styles.listSection}>
        <h3>게시글 목록 영역 (BoardList)</h3>
        {posts.length === 0 ? (
          <ul>
            <li>아직 작성된 글이 없습니다.</li>
          </ul>
        ) : (
          <BoardList>
            {posts.map((post) => (
              <BoardItem
                key={post.id}
                post={post}
                deletePost={deletePost}
                updatePost={updatePost}
              />
            ))}
          </BoardList>
        )}
      </div>
    </div>
  );
}

export default Board;
