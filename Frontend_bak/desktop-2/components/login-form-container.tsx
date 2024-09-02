import type { NextPage } from "next";
import { useCallback } from "react";
import Username from "./username";
import styles from "./login-form-container.module.css";

export type LoginFormContainerType = {
  className?: string;
};

const LoginFormContainer: NextPage<LoginFormContainerType> = ({
  className = "",
}) => {
  const onLoginTextClick = useCallback(() => {
    // Please sync "Desktop - 3" to the project
  }, []);

  return (
    <div className={[styles.loginFormContainer, className].join(" ")}>
      <div className={styles.loginBackground} />
      <div className={styles.usernameParent}>
        <Username user="/user.svg" username="Username" />
        <Username user="/lock.svg" username="password" />
      </div>
      <button className={styles.loginBtn}>
        <div className={styles.rectangle} />
        <a className={styles.login} onClick={onLoginTextClick}>
          login
        </a>
      </button>
    </div>
  );
};

export default LoginFormContainer;
