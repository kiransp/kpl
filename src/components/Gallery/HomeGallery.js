import { Button, Grid, Typography } from "@mui/material";
import styles from "./HomeGallery.module.scss";
// import { hg_placeholder } from "../../Images";
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
          sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Typography
          variant="h1"
          className={styles["hg-heading"]}
          sx={{ my: { xs: "30px", sm: "0" } }}
        >
          Recent Match Photos
        </Typography>
      </Grid>
      {hgPlaceholderCnt.map((image, index) => (
        <>
          <Grid
            item
            md={6}
            xs={12}
            className={styles["hg-images"]}
            sx={{ p: { xs: "0 0 20px 0", sm: "20px" } }}
          >
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/old_kpl.jpeg?alt=media&token=cbc08a01-5b14-4d97-82f2-60a5dabf8a0f"
              }
              alt="placeholder"
              width="100%"
            />
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
            fontSize: "20px",
            fontWeight: "800",
            borderRadius: "0",
            padding: "15px 20px 14px",
            textTransform: "none",
            marginTop: "30px",
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
