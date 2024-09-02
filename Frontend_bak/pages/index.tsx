import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ButtonText from "../components/button-text";
import Button from "../components/button";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Desktop: NextPage = () => {
  const router = useRouter();
  const onLoginTextClick = useCallback(() => {
    router.push("/desktop-1/desktop-2"); // Navigates to the Desktop - 2 page
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/desktop-1/desktop-3/"); // Navigates to the Desktop - 2 page
  }, [router]);

  const onGroupContainerClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='block1Container']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.homePage1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.gradient1Parent}>
              <img
                className={styles.gradient1Icon}
                alt=""
                src="/gradient-1.svg"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.wrapperDesignWizardBadgesParent}>
                  <div className={styles.wrapperDesignWizardBadges}>
                    <img
                      className={styles.designWizardBadges}
                      loading="lazy"
                      alt=""
                      src="/design-wizard-badges@2x.png"
                    />
                  </div>
                  <div className={styles.div}>10+</div>
                </div>
              </div>
              <h1 className={styles.vision}>VISION</h1>
            </div>
            <div className={styles.overviewWrapper}>
              <h1 className={styles.overview}>OVERVIEW</h1>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.bgGradientImgParent}>
              <div className={styles.bgGradientImg}>
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
                </div>
                <div className={styles.starImgParent}>
                  <img
                    className={styles.starImgIcon1}
                    loading="lazy"
                    alt=""
                    src="/starimg-1.svg"
                  />
                  <div className={styles.wrapperDesignWizardBadges1}>
                    <img
                      className={styles.designWizardBadges1}
                      alt=""
                      src="/design-wizard-badges-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <header className={styles.frameHeader}>
                <div className={styles.frameDiv}>
                  <div className={styles.signUpParent}>
                    <a className={styles.signUp}>sign up</a>
                    <a className={styles.login} onClick={onLoginTextClick}>
                      login
                    </a>
                  </div>
                </div>
                <div
                  className={styles.groupDiv}
                  onClick={onGroupContainerClick}
                >
                  <nav className={styles.featuresParent}>
                    <ButtonText button="Home" propMinWidth="46px" />
                    <ButtonText button="About us" propMinWidth="71px" />
                    <ButtonText button="Blog" />
                  </nav>
                  <Button />
                </div>
              </header>
            </div>
            <div className={styles.aMultiplayerGameArcadeMetWrapper}>
              <h3 className={styles.aMultiplayerGameArcadeContainer}>
                <p
                  className={styles.aMultiplayerGameArcade}
                >{`A multiplayer, game-arcade metaverse, where players socialize and compete in the most popular arcade games. Players win, create, gift & sell NFTs while competing for rewards, coins and bragging rights `}</p>
                <p className={styles.onTheBlockchain}>
                  on the blockchain, accessible everywhere.
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.circles}>
          <div className={styles.circlesParent}>
            <img className={styles.circlesIcon} alt="" src="/circles.svg" />
            <div className={styles.bgGradientImgGroup}>
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
                loading="lazy"
                alt=""
                src="/starimg-2.svg"
              />
            </div>
          </div>
          <div
            className={styles.block1Wrapper}
            onClick={onGroupContainerClick1}
          >
            <div className={styles.block1} data-scroll-to="block1Container">
              <div className={styles.block1Inner}>
                <div className={styles.frameParent1}>
                  <div className={styles.cryptoPayWrapper}>
                    <h1 className={styles.cryptoPay}>CRYPTO PAY</h1>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.isGamifiedCryptoWalletWherParent}>
                      <h1
                        className={styles.isGamifiedCrypto}
                      >{`is gamified crypto wallet where u earn badges on each transaction `}</h1>
                      <div className={styles.frameWrapper2}>
                        <div
                          className={styles.frameWrapper3}
                          onClick={onGroupContainerClick}
                        >
                          <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <h3 className={styles.wallet}> Wallet</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameParent2}>
                      <div className={styles.badgesWrapper}>
                        <h1 className={styles.badges}>BADGES</h1>
                      </div>
                      <div
                        className={styles.winBadgesOn}
                      >{`win badges on each transaction `}</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.starImgIcon3}
                alt=""
                src="/starimg-3.svg"
              />
              <img
                className={styles.litecoin1Icon}
                alt=""
                src="/litecoin1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.spaceParent}>
            <img className={styles.spaceIcon} alt="" src="/space@2x.png" />
            <div className={styles.wrapperGradient2Parent}>
              <div className={styles.wrapperGradient2}>
                <img
                  className={styles.gradient2Icon}
                  alt=""
                  src="/gradient-2.svg"
                />
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.wrapperDesignWizardBadgesGroup}>
                  <div className={styles.wrapperDesignWizardBadges2}>
                    <img
                      className={styles.designWizardBadges2}
                      loading="lazy"
                      alt=""
                      src="/design-wizard-badges-2@2x.png"
                    />
                  </div>
                  <div className={styles.div1}>50+</div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.wrapperDesignWizardBadgesWrapper}>
                    <div className={styles.wrapperDesignWizardBadges3}>
                      <img
                        className={styles.designWizardBadges3}
                        loading="lazy"
                        alt=""
                        src="/design-wizard-badges-3@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.div2}>100+</div>
                </div>
              </div>
              <div className={styles.wrapperDesignWizardBadgesContainer}>
                <div className={styles.wrapperDesignWizardBadges4}>
                  <img
                    className={styles.designWizardBadges4}
                    alt=""
                    src="/design-wizard-badges-4@2x.png"
                  />
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div3}>500+</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gradient4Parent}>
            <img
              className={styles.gradient4Icon}
              alt=""
              src="/gradient-4.svg"
            />
            <div className={styles.div4}>1000+</div>
          </div>
          <img
            className={styles.gradient3Icon}
            alt=""
            src="/gradient-3@2x.png"
          />
          <img
            className={styles.sphereIcon1}
            loading="lazy"
            alt=""
            src="/sphere-1.svg"
          />
        </div>
        <FrameComponent />
      </div>
    </div>
  );
};

export default Desktop;
