import { useState } from "react";

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMsg,
  showError,
  isPassword,
  labelClassName,
  inputClassName,
  errorClassName,
  passwordFieldClassName,
  passwordToggleClassName,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      
      {isPassword ? (
        <div className={passwordFieldClassName}>
          <input
            className={inputClassName}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <button
            type="button"
            className={passwordToggleClassName}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            👁
          </button>
        </div>
      ) : (
        <input
          className={inputClassName}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      
      {showError && <p className={errorClassName}>{errorMsg}</p>}
    </>
  );
}

export default FormField;
