import { Grid, Typography } from "@mui/material";
// import { hg_placeholder } from "../Images";
import styles from "../components/Gallery/HomeGallery.module.scss";
import { Gallery as GalleryGrid } from "react-grid-gallery";

const Gallerys = () => {
  // const hgPlaceholderCnt = [4, 4, 5, 6];
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];
  return (
    <Grid
      container
      className={styles["home-gallery-container"]}
      //   sx={{ p: { xs: "10%", sm: "5%" } }}
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
      <GalleryGrid images={images} />
      {/* {hgPlaceholderCnt.map((image, index) => (
        <>
          <Grid item md={6} xs={12} className={styles["hg-images"]}>
            <img src={hg_placeholder} alt="placeholder" width="100%" />
          </Grid>
        </>
      ))} */}
    </Grid>
  );
};

export default Gallerys;
