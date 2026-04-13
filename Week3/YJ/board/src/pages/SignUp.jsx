import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../styles/SignUp.scss";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log({
      username,
      password,
      email,
      confirmPassword
    });

    navigate('/login');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">회원가입</h2>
        <p className="signup-description">
          입력한 값은 모두 React state로 관리됩니다.
        </p>

        <form className="signup-form" onSubmit={handleSignup}>
          <label className="signup-label">아이디</label>
          <input
            className="signup-input"
            type="text"
            placeholder="영문+숫자 4~20자"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="signup-label">이메일</label>
          <input
            className="signup-input"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="signup-label">비밀번호</label>
          <input
            className="signup-input"
            type="password"
            placeholder="8자 이상, 영문+숫자"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="signup-label">비밀번호 확인</label>
          <input
            className="signup-input"
            type="password"
            placeholder="비밀번호 다시 입력"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="signup-submit" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;