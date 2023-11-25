import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { video_thumbnail } from "../../Images";
import styles from "./Story.module.scss";

const Story = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      className={styles["story-container"]}
      sx={{ p: { xs: "10%", sm: "5%" } }}
    >
      <Grid item md={6} xs={12}>
        <img
          src={mobile ? video_thumbnail : video_thumbnail}
          alt="story banner"
          width={"90%"}
        />
      </Grid>
      <Grid item md={6} xs={12} sx={{ pl: { xs: 0, sm: "30px" } }}>
        <Typography variant="h3" sx={{ p: "0 0 20px 0" }}>
          Video
        </Typography>
        <Typography variant="h1" className={styles["story-title"]}>
          The Cricket Pulse Story, Beyond the Boundary
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

export default Story;
