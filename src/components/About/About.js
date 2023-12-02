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
        <Typography
          variant="h3"
          sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
        >
          About
        </Typography>
        <Typography variant="h1" className={styles["about-title"]}>
          Empowering Unity and Social Responsibility
        </Typography>
        <Typography variant="body1" className={styles["about-desc"]}>
          RK Tigers, under the steadfast leadership of Mr. Ramesh Kamble, stands
          as a formidable youth team that values inclusivity and unity across
          diverse backgrounds. Mr. Kamble, a pillar of strength for the group,
          has dedicated himself to upholding the team's integrity. The RK Tigers
          are actively involved in a range of social initiatives, including but
          not limited to Blood Donation, Eye Donation, Health Camps, and
          Plantation drives, aligning with the ethos of RK Tigers Sports Club.
          Remarkably, the youth team avoids falling into the clutches of
          detrimental habits and channels their energy into sports like cricket,
          bodybuilding, karate, and other athletic pursuits.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
