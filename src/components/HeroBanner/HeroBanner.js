import { Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "./HeroBanner.module.scss";
import { bannerImage, bannerImageMobile } from "../../Images";

const HeroBanner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bigScreen = useMediaQuery(theme.breakpoints.up("xl"));
  console.log("Mobile ", mobile);
  console.log("bigScreen ", bigScreen);
  return (
    <Grid
      container
      className={styles["home-container"]}
      sx={{
        backgroundImage: {
          xs: `url(${bannerImageMobile})`,
          sm: `url(${bannerImage})`,
        },
        height: bigScreen ? "1024px" : "800px",
        backgroundSize: bigScreen ? "contain" : "contain",
      }}
    >
      {/* {mobile ? (
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
      )} */}
    </Grid>
  );
};

export default HeroBanner;
