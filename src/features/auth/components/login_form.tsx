import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { login } from "../auth_slice";
import styles from "../../../styles/login.module.css";
import { Link, useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const loginError = useSelector((state: RootState) => state.auth.error);
  const loginStatus = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === "succeeded") {
      navigate("/admin/");
    }
  }, [loginStatus, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            className={styles.inputs}
            type="email"
            placeholder="Enter your email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
            required
          />
        </div>

        <div>
          <input
            className={styles.inputs}
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
            required
          />
        </div>

        <div className={styles.checkbox}>
          <label htmlFor="remind-me">
            <input id="remind-me" className="checkbox-input" type="checkbox" />
            Remember me
          </label>
        </div>

        {loginError && <p className={styles.error}>{loginError}</p>}

        <button className={styles.btnn}>Login</button>

        <div className={styles.signup}>
          <p>Not registered?</p>
          <Link className={styles.signupLink} to="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
