import type { NextPage } from "next";
import { useCallback } from "react";
import ButtonText from "../components/button-text";
import FrameComponent from "../components/frame-component";
import LoginFormContainer from "../components/login-form-container";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  const onButtonTextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (
    <div className={styles.desktop2}>
      <div className={styles.homePage1}>
        <div className={styles.frameParent}>
          <div className={styles.gradient1Parent}>
            <img
              className={styles.gradient1Icon}
              alt=""
              src="/gradient-1.svg"
            />
            <h1 className={styles.vision}>VISION</h1>
          </div>
          <div className={styles.circles}>
            <div className={styles.loginForm}>
              <div className={styles.loginFields}>
                <a className={styles.login}>login</a>
              </div>
              <a className={styles.signUp}>sign up</a>
              <div className={styles.languageSelectorParent}>
                <div className={styles.languageSelector}>
                  <a className={styles.en}>EN</a>
                </div>
                <img
                  className={styles.systemsArrowDropDownLine}
                  alt=""
                  src="/systems--arrowdropdownline.svg"
                />
              </div>
            </div>
            <div className={styles.circlesParent}>
              <img className={styles.circlesIcon} alt="" src="/circles.svg" />
              <img
                className={styles.litecoin1Icon}
                loading="lazy"
                alt=""
                src="/litecoin1@2x.png"
              />
            </div>
          </div>
          <div className={styles.bgGradientImg}>
            <nav className={styles.featuresParent}>
              <ButtonText
                button="Home"
                propMinWidth="46px"
                onButtonTextClick={onButtonTextClick}
              />
              <ButtonText button="About us" propMinWidth="71px" />
              <ButtonText button="Blog" />
            </nav>
            <div className={styles.cryptoIcons}>
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
                className={styles.starIconOne}
                loading="lazy"
                alt=""
                src="/starimg.svg"
              />
              <img
                className={styles.starImgIcon}
                loading="lazy"
                alt=""
                src="/starimg-1.svg"
              />
            </div>
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
          <img
            className={styles.sphereIcon}
            loading="lazy"
            alt=""
            src="/sphere.svg"
          />
          <div className={styles.bgGradientImgParent}>
            <img
              className={styles.bgGradientImgIcon}
              alt=""
              src="/bggradientimg@2x.png"
            />
            <img
              className={styles.sphereIcon1}
              loading="lazy"
              alt=""
              src="/sphere-1@2x.png"
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
              className={styles.starIconThree}
              loading="lazy"
              alt=""
              src="/starimg-2.svg"
            />
          </div>
        </div>
        <LoginFormContainer />
      </div>
      <div className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/group-11.svg" />
        <img
          className={styles.footerItem}
          alt=""
          src="/rectangle-39234@2x.png"
        />
      </div>
    </div>
  );
};

export default Desktop;
