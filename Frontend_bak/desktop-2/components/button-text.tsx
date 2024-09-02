import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./button-text.module.css";

export type ButtonTextType = {
  className?: string;
  button?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onButtonTextClick?: () => void;
};

const ButtonText: NextPage<ButtonTextType> = ({
  className = "",
  button,
  propMinWidth,
  onButtonTextClick,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.buttonText, className].join(" ")}>
      <a
        className={styles.button}
        style={buttonStyle}
        onClick={onButtonTextClick}
      >
        {button}
      </a>
    </div>
  );
};

export default ButtonText;
