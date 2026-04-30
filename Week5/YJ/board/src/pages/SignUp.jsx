import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/SignUp.module.scss";
import FormField from "./components/FormField";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isUsernameValid = /^[a-zA-Z0-9]{4,20}$/.test(username);
  const isEmailValid = email.includes("@");
  const isPasswordValid =
    password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
  const isConfirmPasswordValid = password === confirmPassword;

  const isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  const handleSignup = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    // 두 번째 과제: 회원가입 시 세션 스토리지에 데이터 저장
    sessionStorage.setItem(
      "registeredUser",
      JSON.stringify({
        username,
        email,
        password,
      })
    );

    console.log({
      username,
      password,
      email,
      confirmPassword,
    });

    navigate("/login");
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h2 className={styles.signupTitle}>회원가입</h2>
        <p className={styles.signupDescription} />

        <form className={styles.signupForm} onSubmit={handleSignup}>
          <FormField
            label="아이디"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            errorMsg="아이디는 영문+숫자 4~20자로 입력해주세요."
            showError={username && !isUsernameValid}
            labelClassName={styles.signupLabel}
            inputClassName={styles.signupInput}
            errorClassName={styles.signupError}
          />

          <FormField
            label="이메일"
            type="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMsg="이메일 형식이 올바르지 않습니다."
            showError={email && !isEmailValid}
            labelClassName={styles.signupLabel}
            inputClassName={styles.signupInput}
            errorClassName={styles.signupError}
          />

          <FormField
            label="비밀번호"
            isPassword={true}
            placeholder="8자 이상, 영문+숫자"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMsg="비밀번호는 8자 이상, 영문+숫자로 입력해주세요."
            showError={password && !isPasswordValid}
            labelClassName={styles.signupLabel}
            inputClassName={styles.signupInput}
            errorClassName={styles.signupError}
            passwordFieldClassName={styles.passwordField}
            passwordToggleClassName={styles.passwordToggle}
          />

          <FormField
            label="비밀번호 확인"
            isPassword={true}
            placeholder="비밀번호 다시 입력"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMsg="비밀번호가 일치하지 않습니다."
            showError={confirmPassword && !isConfirmPasswordValid}
            labelClassName={styles.signupLabel}
            inputClassName={styles.signupInput}
            errorClassName={styles.signupError}
            passwordFieldClassName={styles.passwordField}
            passwordToggleClassName={styles.passwordToggle}
          />
          <button
            className={styles.signupSubmit}
            type="submit"
            disabled={!isFormValid}
          >
            가입하기
          </button>
        </form>
        <p className={styles.signupFooter}>
          이미 계정이 있나요?{" "}
          <Link className={styles.footerLink} to="/login">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
