import { Grid, Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import {
  call_icon,
  fb_icon,
  insta_icon,
  twitter_icon,
  yt_icon,
} from "../../Images";

const Footer = () => {
  return (
    <>
      <Grid container sx={{ p: { xs: "0 10% 10% 10%", sm: "0 5% 2% 5%" } }}>
        <div style={{ position: "relative", width: "100%" }}>
          <img
            src={
              // "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/desktop_footer.png?alt=media&token=52f9ed42-ebce-4575-9c8f-eb5be3dbe209"
              "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/desktop_footer_txt.png?alt=media&token=1eb8caf4-6a9e-4eb1-a1fb-afadcfd5c0e3"
            }
            alt="de"
            width="100%"
          />
          {/* <div
            style={{
              position: "absolute",
              bottom: "27%",
              marginLeft: "2%",
              color: "#FFF",
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              BANNI. AADI. GELLI.
            </Typography>
            <Typography variant="h6" sx={{ width: "70%" }}>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </Typography>
          </div> */}
        </div>
        <Grid item md={6} xs={12}>
          <Typography variant="h6">Follow us</Typography>
          <div>
            <img src={fb_icon} alt="a" className={styles["social-icons"]} />
            <img
              src={twitter_icon}
              alt="a"
              className={styles["social-icons"]}
            />
            <img src={insta_icon} alt="a" className={styles["social-icons"]} />
            <img src={yt_icon} alt="a" className={styles["social-icons"]} />
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h6">Contact us</Typography>
          <div className={styles["contact-us"]}>
            <img src={call_icon} alt="a" style={{ marginRight: "15px" }} />
            <Typography
              variant="subtitle1"
              className={styles["contact-detail"]}
            >
              +91 9898 9996 66
            </Typography>
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h6">Email us</Typography>
          <div className={styles["contact-us"]}>
            <img src={call_icon} alt="a" style={{ marginRight: "15px" }} />
            <Typography
              variant="subtitle1"
              className={styles["contact-detail"]}
            >
              kpl.karunadu@gmail.com
            </Typography>
          </div>
        </Grid>
      </Grid>
      <hr className={styles["footer-border"]} />

      <Grid container sx={{ p: { xs: "1% 10% 10% 10%", sm: "1% 5% 1% 5%" } }}>
        <Grid item md={6} xs={12}>
          <Typography variant="h6">
            Copyright © 2024 Karunadu Cricket League. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h6">Terms of Use</Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography variant="h6">Privacy Policy</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
