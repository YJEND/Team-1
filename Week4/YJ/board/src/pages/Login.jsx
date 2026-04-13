import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../styles/Login.scss";
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isUsernameValid = /^[a-zA-Z0-9]{4,20}$/.test(username);
  const isPasswordValid =
    password.length >= 8 &&
    /[a-zA-Z]/.test(password) &&
    /[0-9]/.test(password);

  const isFormValid = isUsernameValid && isPasswordValid;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    console.log({
      username,
      password,
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">로그인</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <label className="login-label">아이디</label>
          <input
            className="login-input"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {username && !isUsernameValid && (
            <p className="login-error">
              아이디는 3자 이상 입력해주세요.
            </p>
          )}

          <label className="login-label">비밀번호</label>
          <input
            className="login-input"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="login-password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          </button>

          {password && !isPasswordValid && (
            <p className="login-error">
              비밀번호는 8자 이상, 영문+숫자로 입력해주세요.
            </p>
          )}

          <button
            className="login-submit"
            type="submit"
            disabled={!isFormValid}
          >
            로그인
          </button>
        </form>

        <p className="login-footer">
          계정이 없나요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;