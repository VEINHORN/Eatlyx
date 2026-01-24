import React, { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router";
import { signInUser } from "../../services/authService";
import clsx from "clsx";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    try {
      await signInUser(email, password);
      navigate("/order");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={clsx([styles.loginpage, styles["loginpage-background"]])}>
      <h1 className="h1Title">Log in</h1>
      <div className={styles.login}>
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label>Username</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.input}>
            <label>Password </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <Button title="Submit" type="submit" />
            <Button title="Cancel" outlined onClick={handleCancel} />
          </div>
        </form>
      </div>
    </div>
  );
};
