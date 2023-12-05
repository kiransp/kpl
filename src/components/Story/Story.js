import { Grid, Typography } from "@mui/material";
import styles from "./Story.module.scss";

const Story = () => {
  return (
    <Grid
      container
      className={styles["story-container"]}
      sx={{ p: { xs: "10%", sm: "5%" } }}
    >
      <Grid item md={6} xs={12}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/oIfpmQA3ji8"
          title="Unkal Premiere League | Hubballi Mandi "
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Mi_dLVXOVFc"
          title="U.P.L(Unkal Premier League)OFFICIAL Teaser.2021 From RK TIGERS SPORTS CLUB HUBLI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </Grid>
      <Grid item md={6} xs={12} sx={{ pl: { xs: 0, sm: "30px" } }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
        >
          Story
        </Typography>
        <Typography variant="h1" className={styles["story-title"]}>
          Unkal Premier League
        </Typography>
        <Typography variant="body1" className={styles["story-desc"]}>
          Unkal Premier League, Hubli's pioneering cricket tournament, promotes
          talent. In the past two seasons, emerging players formed a winning
          Unkal team for district tournaments. This season, 8 franchise teams in
          unique jerseys, with officials from different districts. UPL
          transcends cricket—it's a festival for enthusiasts."
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Story;
