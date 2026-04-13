import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <Link to="/">홈</Link>
      <Link to="/board">게시판</Link>
<<<<<<< HEAD
=======
      <Link to="/login">로그인</Link>
>>>>>>> refs/rewritten/recover
      <Link to="/signup">회원가입</Link>
    </header>
  );
}

export default Header;