import { Button, Grid, Typography } from "@mui/material";
import styles from "./HomeGallery.module.scss";
import { hg_placeholder } from "../../Images";
import { useNavigate } from "react-router-dom";

const HomeGallery = () => {
  const navigate = useNavigate();
  const hgPlaceholderCnt = [4, 4, 5, 6];
  return (
    <Grid
      container
      className={styles["home-gallery-container"]}
      sx={{ p: { xs: "10%", sm: "5%" } }}
      id="Gallery"
    >
      <Grid item md={12} xs={12}>
        <Typography
          variant="h3"
          className={styles["hg-title"]}
          sx={{ p: "0 0 20px 0" }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Typography variant="h1" className={styles["hg-heading"]}>
          Recent Latest Match Photos
        </Typography>
      </Grid>
      {hgPlaceholderCnt.map((image, index) => (
        <>
          <Grid item md={6} xs={12} className={styles["hg-images"]}>
            <img src={hg_placeholder} alt="placeholder" width="100%" />
          </Grid>
        </>
      ))}
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#000",
            border: "1px solid #FFF",
            fontFamily: "Montserrat",
            "&:hover": {
              backgroundColor: "#FFFF00",
              color: "#000",
              border: "none",
            },
          }}
          onClick={() => navigate("/Gallery")}
        >
          View All
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeGallery;
