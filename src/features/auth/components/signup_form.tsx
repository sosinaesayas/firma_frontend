
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../auth_slice";
import styles from "../../../styles/signup.module.css";
import { AppDispatch } from "../../../store/store";
import { RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const signupError = useSelector((state: RootState) => state.auth.error); 
  const signupStatus = useSelector((state: RootState) => state.auth.status); 
  const navigate = useNavigate();

  useEffect(() => {
    if (signupStatus === 'succeeded') {
      navigate('/');
    }
  }, [signupStatus, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signup({ email, password, phone, firstname, lastname, role }));
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            className={styles.inputs}
            type="email"
            placeholder="Enter your email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            type="number"
            placeholder="Phone Number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            type="text"
            placeholder="First Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)}
            value={firstname}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Last Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}
            value={lastname}
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            type="text"
            placeholder="Role"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)}
            value={role}
            required
          />
        </div>
        <button type="submit" className={styles.btnn}>Sign up</button>
        {signupError && <p className={styles.error}>{signupError}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
