import { Grid, Typography } from "@mui/material";
import styles from "./HomeGallery.module.scss";
import { hg_placeholder } from "../../Images";

const HomeGallery = () => {
  const hgPlaceholderCnt = [4, 4, 5, 6];
  return (
    <Grid
      container
      className={styles["home-gallery-container"]}
      sx={{ p: { xs: "10%", sm: "5%" } }}
    >
      <Grid item md={12}>
        <Typography variant="h5" className={styles["hg-title"]}>
          GALLERY
        </Typography>
        <Typography variant="h1" className={styles["hg-heading"]}>
          Recent Lates Match Photographs
        </Typography>
      </Grid>
      {hgPlaceholderCnt.map((image, index) => (
        <Grid item md={6} xs={12} className={styles["hg-images"]}>
          <img src={hg_placeholder} alt="placeholder" />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeGallery;
