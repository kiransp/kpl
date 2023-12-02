import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import styles from "../components/Gallery/HomeGallery.module.scss";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import { galleryImages } from "../Images";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <Grid
        container
        className={styles["home-gallery-container"]}
        sx={{ p: { xs: "5% 10% 10% 10%", sm: "2% 5% 5% 5%" } }}
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
            Recent Match Photos
          </Typography>
        </Grid>
        <Grid item md={12}>
          <ImageList sx={{ width: "100%" }} cols={2} variant="masonry">
            {galleryImages.slice(4).map((item, index) => (
              <ImageListItem key={item.img}>
                <img src={`${item.src}`} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
};

export default Gallery;
