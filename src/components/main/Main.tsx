import styles from "./Main.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import myPhoto from "./../../assets/image/me16.jpg";
const Fade = require("react-reveal/Fade");

export const Main = () => {
  return (
    <Fade top>
      <div className={styles.mainBlock} id="main">
        <div
          className={`${styleContainer.containerBlock} ${styles.containerMain}`}
        >
          <div className={styles.photoContainer}>
            <img src={myPhoto} className={styles.photo} alt={"Anastasiya"} />
          </div>
          <div className={styles.welcoming}>
            <h2 className={styles.caption}>
              <span>Hey, I am</span>
              <br />
              <span>Anastasiya Zabolotskikh</span>
            </h2>
          </div>
        </div>
      </div>
    </Fade>
  );
};
