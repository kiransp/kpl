import { Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "./Home.module.scss";
import { bannerImage, bannerImageMobile, kplLogo } from "../../Images";

const Home = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("Mobile ", mobile);
  return (
    <Grid
      container
      className={styles["home-container"]}
      sx={{
        backgroundImage: {
          xs: `url(${bannerImageMobile})`,
          sm: `url(${bannerImage})`,
        },
      }}
    >
      {mobile ? (
        <Grid item className={styles["home-logo-img-container"]}>
          <img
            src={kplLogo}
            alt="logo"
            className={styles["home-logo-mobile"]}
          />
        </Grid>
      ) : (
        <>
          {" "}
          <Grid item md={1}></Grid>
          <Grid item md={11}>
            <img src={kplLogo} alt="logo" className={styles["home-logo"]} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
