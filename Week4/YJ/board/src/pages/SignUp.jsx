import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../styles/SignUp.scss";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isUsernameVaild = /^[a-zA-Z0-9]{4,20}$/.test(username);
  const isEmailValid = email.includes('@');
  const isPasswordValid = 
    password.length >= 8 &&
    /[a-zA-Z]/.test(password) &&
    /[0-9]/.test(password);
  const isConfirmPasswordValid = password === confirmPassword;
  
  const isFormValid = isUsernameVaild && isEmailValid && isPasswordValid && isConfirmPasswordValid;

  const handleSignup = (e) => {
    e.preventDefault();

    if(!isFormValid){
      return
    }
    
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
          {username && !isUsernameVaild &&(
            <p className = "signup-error">
              아이디는 영문+숫자 4~20자로 입력해주세요.
            </p>
          )}

          <label className="signup-label">이메일</label>
          <input
            className="signup-input"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && !isEmailValid && (
            <p className = "signup-error">
              이메일 형식이 올바르지 않습니다.
            </p>
          )}

          <label className="signup-label">비밀번호</label>
          <input
            className="signup-input"
            type={showPassword ? "text" : "password"}
            placeholder="8자 이상, 영문+숫자"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='button' className='password-toggle' onClick={() => setShowPassword((prev) => !prev)} >
            {showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          </button>
          {password && !isPasswordValid && (
            <p className="signup-error">
              비밀번호는 8자 이상, 영문+숫자로 입력해주세요.
            </p>
          )}
          
          <label className="signup-label">비밀번호 확인</label>
          <input
            className="signup-input"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호 다시 입력"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
          <button type='button' className='password-toggle' onClick={() => setShowPassword((prev) => !prev)} >
            {showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          </button>
            {confirmPassword && !isConfirmPasswordValid && (
            <p className="signup-error">
              비밀번호가 일치하지 않습니다.
            </p>)}
            <button className="signup-submit" type="submit" disabled={!isFormValid}>
            가입하기
          </button>
        </form>
        <p className="signup-footer">이미 계정이 있나요? <Link to="/login">로그인</Link></p>
      </div>
    </div>
  );
  
}

export default SignUp;