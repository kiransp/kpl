import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import styles from "./HomeGallery.module.scss";
import { galleryImages } from "../../Images";
import { useNavigate } from "react-router-dom";

const HomeGallery = () => {
  const navigate = useNavigate();

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
      {/* {galleryImages.map(({ src, alt }, index) => (
        <>
          {index <= 3 && (
            <Grid
              item
              md={6}
              xs={12}
              className={styles["hg-images"]}
              sx={{ p: { xs: "0 0 20px 0", sm: "20px" } }}
            >
              <img src={src} alt={alt} width="100%" />
            </Grid>
          )}
        </>
      ))} */}
      <Grid item md={12}>
        <ImageList sx={{ width: "100%" }} cols={2} variant="masonry">
          {galleryImages.slice(0, 4).map((item, index) => (
            <ImageListItem key={item.img}>
              <img src={`${item.src}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#000",
            border: "1px solid #FFF",
            fontFamily: "Montserrat",
            fontSize: { xs: "14px", sm: "20px" },
            fontWeight: "800",
            borderRadius: "0",
            padding: { xs: "10px", sm: "15px 20px 14px" },
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
