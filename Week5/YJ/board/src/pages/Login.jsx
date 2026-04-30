import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Login.module.scss";
import FormField from "./components/FormField";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isUsernameValid = /^[a-zA-Z0-9]{4,20}$/.test(username);
  const isPasswordValid =
    password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);

  const isFormValid = isUsernameValid && isPasswordValid;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    localStorage.setItem("loggedInUser", JSON.stringify({ username }));

    console.log({
      username,
      password,
    });
    navigate("/"); // ← 메인 페이지로 이동
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginTitle}>로그인</h2>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          <FormField
            label="아이디"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            errorMsg="아이디는 3자 이상 입력해주세요."
            showError={username && !isUsernameValid}
            labelClassName={styles.loginLabel}
            inputClassName={styles.loginInput}
            errorClassName={styles.loginError}
          />

          <FormField
            label="비밀번호"
            isPassword={true}
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMsg="비밀번호는 8자 이상, 영문+숫자로 입력해주세요."
            showError={password && !isPasswordValid}
            labelClassName={styles.loginLabel}
            inputClassName={styles.loginInput}
            errorClassName={styles.loginError}
            passwordFieldClassName={styles.passwordField}
            passwordToggleClassName={styles.passwordToggle}
          />

          <button
            className={styles.loginSubmit}
            type="submit"
            disabled={!isFormValid}
          >
            로그인
          </button>
        </form>

        <p className={styles.loginFooter}>
          계정이 없나요?{" "}
          <Link className={styles.footerLink} to="/signup">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
