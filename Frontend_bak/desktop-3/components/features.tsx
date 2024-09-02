import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import styles from "./features.module.css";

export type FeaturesType = {
  className?: string;
  button?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onButtonTextClick?: () => void;
};

const Features: NextPage<FeaturesType> = ({
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

  const onButtonTextClick1 = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (
    <div className={[styles.features, className].join(" ")}>
      <a
        className={styles.button}
        onClick={onButtonTextClick}
        style={buttonStyle}
      >
        {button}
      </a>
    </div>
  );
};

export default Features;
