import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.homePage1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.blockchainTechnologyEnsuresWrapper}>
            <h3 className={styles.blockchainTechnologyEnsuresContainer}>
              <p
                className={styles.blockchainTechnologyEnsures}
              >{`Blockchain technology ensures items that players win `}</p>
              <p
                className={styles.orCreateAre}
              >{`or create are recorded and owned by the player. `}</p>
              <p
                className={styles.allActivitiesDrive}
              >{`All activities drive a cycle for NFT creation and commerce through player creativity and gameplay.  `}</p>
              <p className={styles.theModelIs}>
                The model is simple, play games and make money.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

export default FrameComponent;
