import { Grid, useMediaQuery, useTheme } from "@mui/material";
import styles from "./HeroBanner.module.scss";
import { bannerImage, bannerImageMobile } from "../../Images";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import { NavHashLink } from "react-router-hash-link";
// delete

const HeroBanner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const bigScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Grid
      container
      className={styles["home-container"]}
      sx={{
        backgroundImage: {
          xs: `url(${bannerImageMobile})`,
          sm: `url(${bannerImage})`,
        },
        height: bigScreen ? "1024px" : "746px",
        backgroundSize: mobile ? "contain" : "cover",
        position: "relative",
      }}
    >
      {/* <NavHashLink
        to="/register"
        className={styles["dislodged-border"]}
        style={{
          position: "absolute",
          bottom: mobile ? "25%" : "10%",
          left: mobile ? "25%" : "9%",
          padding: mobile ? "5px 15px" : "auto",
        }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          REGISTER NOW <ArrowRightAltIcon fontSize="large" />
        </span>
      </NavHashLink> */}

      {/* </Button> */}
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
