/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import VisibilityPass from "../VisibilityPass/VisibilityPass";
import PassInput from "../PassInput";

import useValidation from "../../core/hooks/useValidation";
import useVisibility from "../../core/hooks/useVisibility";

import "./index.css";

const Form: FC = () => {
  const [password, setPassword] = useState("");

  const { isShowPass, handleVisibility } = useVisibility();
  const { error, passwordChecker } = useValidation();

  const navigate = useNavigate();

  useEffect(() => {
    if (password) {
      passwordChecker(password);
    }
  }, [password]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!error.isError) {
      navigate("/success");
    }
  }

  return (
    <div className="pass-form-wrapper">
      <h1>Password validator</h1>
      <form className="pass-form" onSubmit={handleSubmit}>
        <label className="pass-wrapper">
          <span className="pass__label">Password</span>
          <PassInput
            isShowPass={isShowPass}
            handleChange={handleChange}
            password={password}
          />
          <VisibilityPass
            handleVisibility={handleVisibility}
            isShowPass={isShowPass}
          />
          {error.isError && (
            <span className="error__massage">{error.message}</span>
          )}
        </label>
        <button className="validate__btn" type="submit">
          Validate
        </button>
      </form>
    </div>
  );
};

export default Form;
