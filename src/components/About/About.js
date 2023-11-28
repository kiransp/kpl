import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { abtBannerDesktop, abtBannerMobile } from "../../Images";
import styles from "./About.module.scss";

const About = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      className={styles["about-container"]}
      sx={{ p: { xs: "10%", sm: "5%" } }}
      id="About"
    >
      <Grid item md={6} xs={12}>
        <img
          src={mobile ? abtBannerMobile : abtBannerDesktop}
          alt="about banner"
          width={"100%"}
        />
      </Grid>
      <Grid item md={6} xs={12} sx={{ pl: { xs: 0, sm: "30px" } }}>
        <Typography variant="h3" sx={{ p: "0 0 20px 0" }}>
          About
        </Typography>
        <Typography variant="h1" className={styles["about-title"]}>
          The Cricket Pulse Story, Beyond the boundry
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
