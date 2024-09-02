import type { NextPage } from "next";
import { useCallback } from "react";
import Features from "../components/features";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  const onButtonTextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (
    <div className={styles.desktop3}>
      <div className={styles.homePage1}>
        <div className={styles.bgGradientImgParent}>
          <div className={styles.bgGradientImg}>
            <div className={styles.buttonTextParent}>
              <Features button="About us" propMinWidth="71px" />
              <Features button="Blog" propMinWidth="35px" />
            </div>
            <div className={styles.wrapperGroup3Parent}>
              <div className={styles.wrapperGroup3}>
                <img
                  className={styles.wrapperGroup3Child}
                  alt=""
                  src="/group-3@2x.png"
                />
              </div>
              <img
                className={styles.etherium2Copy1}
                loading="lazy"
                alt=""
                src="/etherium2-copy-1@2x.png"
              />
              <img
                className={styles.monero2Copy2}
                loading="lazy"
                alt=""
                src="/monero2-copy-2@2x.png"
              />
              <img
                className={styles.starImgIcon}
                loading="lazy"
                alt=""
                src="/starimg.svg"
              />
              <img
                className={styles.starImgIcon1}
                alt=""
                src="/starimg-1.svg"
              />
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-39235@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.loginWrapper}>
              <a className={styles.login}>login</a>
            </div>
            <div className={styles.signUpWrapper}>
              <a className={styles.signUp}>sign up</a>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.enWrapper}>
                  <a className={styles.en}>EN</a>
                </div>
                <img
                  className={styles.systemsArrowDropDownLine}
                  alt=""
                  src="/systems--arrowdropdownline.svg"
                />
              </div>
            </div>
            <Features button="Home" onButtonTextClick={onButtonTextClick} />
          </div>
        </div>
        <div className={styles.circles}>
          <div className={styles.circlesParent}>
            <img className={styles.circlesIcon} alt="" src="/circles.svg" />
            <header className={styles.bgGradientImgGroup}>
              <img
                className={styles.bgGradientImgIcon}
                alt=""
                src="/bggradientimg@2x.png"
              />
              <img
                className={styles.sphereIcon}
                loading="lazy"
                alt=""
                src="/sphere@2x.png"
              />
              <img
                className={styles.glassIcon}
                loading="lazy"
                alt=""
                src="/glass@2x.png"
              />
              <img
                className={styles.bitcoin1Icon}
                alt=""
                src="/bitcoin1@2x.png"
              />
              <img
                className={styles.starImgIcon2}
                alt=""
                src="/starimg-2.svg"
              />
            </header>
            <img
              className={styles.litecoin1Icon}
              loading="lazy"
              alt=""
              src="/litecoin1@2x.png"
            />
          </div>
        </div>
        <FrameComponent />
        <div className={styles.spaceParent}>
          <img className={styles.spaceIcon} alt="" src="/space@2x.png" />
          <img className={styles.gradient4Icon} alt="" src="/gradient-4.svg" />
          <img
            className={styles.gradient3Icon}
            alt=""
            src="/gradient-3@2x.png"
          />
          <div className={styles.wrapperGradient2}>
            <img
              className={styles.gradient2Icon}
              alt=""
              src="/gradient-2.svg"
            />
          </div>
          <img className={styles.sphereIcon1} alt="" src="/sphere-1.svg" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.gradient1Parent}>
            <img
              className={styles.gradient1Icon}
              alt=""
              src="/gradient-1.svg"
            />
            <h1 className={styles.vision}>VISION</h1>
          </div>
          <div className={styles.makeATranscation}>MAKE A TRANSCATION</div>
          <div className={styles.starImgParent}>
            <img className={styles.starImgIcon3} alt="" src="/starimg-3.svg" />
            <div className={styles.rectangleParent}>
              <div className={styles.frameInner} />
              <div className={styles.wrapperDesignWizardBadges}>
                <img
                  className={styles.designWizardBadges}
                  alt=""
                  src="/design-wizard-badges@2x.png"
                />
              </div>
              <div className={styles.rectangleDiv} />
              <h3 className={styles.yourBadge}>{`your badge `}</h3>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-39235-1@2x.png"
              />
              <div className={styles.form}>
                <div className={styles.username}>
                  <div className={styles.rectangle} />
                  <div className={styles.receiptAddress}>receipt address</div>
                </div>
                <div className={styles.password}>
                  <div className={styles.rectangle1} />
                  <div className={styles.amount}>amount</div>
                </div>
                <button className={styles.loginBtn}>
                  <div className={styles.rectangle2} />
                  <div className={styles.send}>send</div>
                </button>
              </div>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild1} />
              </div>
              <h1 className={styles.makeYourTranscation}>
                MAKE YOUR TRANSCATION
              </h1>
              <h1 className={styles.totalBalance470}>TOTAL BALANCE :$47.0</h1>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild2} />
                <div
                  className={styles.sent470To}
                >{`SENT $47.0 TO nam@123 `}</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild3} />
                <div
                  className={styles.sent470To1}
                >{`SENT $47.0 TO nam@123 `}</div>
              </div>
              <div className={styles.rectangleFrame}>
                <div className={styles.frameChild4} />
              </div>
              <h1 className={styles.transcationHistroy}>TRANSCATION HISTROY</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
