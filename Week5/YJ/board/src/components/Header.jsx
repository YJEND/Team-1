import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">홈</Link>
      <Link className={styles.link} to="/board">게시판</Link>
      <Link className={styles.link} to="/login">로그인</Link>
      <Link className={styles.link} to="/signup">회원가입</Link>
    </header>
  );
}

export default Header;
