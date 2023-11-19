import { Grid } from "@mui/material";
import styles from "./Home.module.scss";
import { kplLogo } from "../../Images";

const Home = () => {
  return (
    <Grid container className={styles["home-container"]}>
      <Grid item md={1}></Grid>
      <Grid item md={11}>
        <img src={kplLogo} alt="logo" className={styles["home-logo"]} />
      </Grid>
    </Grid>
  );
};

export default Home;
