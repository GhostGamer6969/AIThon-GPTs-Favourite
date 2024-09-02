import type { NextPage } from "next";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <a className={styles.button1}>Wallet</a>
    </button>
  );
};

export default Button;
