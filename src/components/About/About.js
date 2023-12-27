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
      <Grid item md={6} xs={12} sx={{ display: "flex", alignItems: "center" }}>
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
          Under the unwavering leadership of Mr. Ramesh Kamble, RK Tigers stands
          as a formidable youth team, championing inclusivity and unity across
          diverse backgrounds. Mr. Kamble, a pillar of strength, dedicates
          himself to upholding the team's integrity. Alongside him, the dynamic
          trio of Manjunath Hosamani, Kiran Pawar and Devraj Koti actively
          contribute to the team's success, blending their passion for sports
          with a commitment to social initiatives. RK Tigers, engaged in
          activities such as Blood Donation, Eye Donation, Health Camps, and
          Plantation drives, exemplifies the ethos of the RK Tigers Sports Club.
          Remarkably, the team, avoids detrimental habits, channeling their
          energy into cricket, bodybuilding, karate, and various athletic
          pursuits. RK Tigers Team create a powerful force that extends beyond
          sports, leaving a positive impact on both the team and the community.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
