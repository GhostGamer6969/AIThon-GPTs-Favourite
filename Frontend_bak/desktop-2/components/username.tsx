import type { NextPage } from "next";
import styles from "./username.module.css";

export type UsernameType = {
  className?: string;
  user?: string;
  username?: string;
};

const Username: NextPage<UsernameType> = ({
  className = "",
  user,
  username,
}) => {
  return (
    <div className={[styles.username, className].join(" ")}>
      <div className={styles.rectangle} />
      <img className={styles.userIcon} loading="lazy" alt="" src={user} />
      <div className={styles.username1}>{username}</div>
    </div>
  );
};

export default Username;
