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
      const role = localStorage.getItem("role");
      role == "Admin" ? navigate("/admin/") : navigate("/company/");
    }
  }, [loginStatus, navigate , dispatch]);

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

        <button className={styles.btnn}>Login</button>

        {loginError && (
          <p className="text-orange-700 text-center">{loginError?.response?.data?.message }</p>
        )}

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
