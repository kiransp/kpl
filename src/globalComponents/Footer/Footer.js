import { Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./Footer.module.scss";
import { call_icon, fb_icon, insta_icon, yt_icon } from "../../Images";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={
            mobile
              ? "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/banners%2Ffooter_sp.png?alt=media&token=313c8fd5-cefa-49f7-932b-7d29f5df8063"
              : "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/banners%2Ffooter_yellow%26white_img_dt.png?alt=media&token=aa863b4e-d8d9-4606-9ced-14cc69a01375"
          }
          alt="de"
          width="100%"
        />
      </div>
      <Grid container sx={{ p: { xs: "0 10% 10% 10%", sm: "0 5% 2% 5%" } }}>
        <Grid item md={4} xs={12} id="Contact Us">
          <Typography variant="h6" className={styles["social-name"]}>
            Follow us
          </Typography>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100063765325414&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb_icon} alt="a" className={styles["social-icons"]} />
            </a>
            <a
              href="https://youtube.com/@rktigerssportsclub732?si=6wp3WxDWoNe8o_VN"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yt_icon} alt="a" className={styles["social-icons"]} />
            </a>
            <a
              href="https://instagram.com/rktigerssportsclub?igshid=NzZlODBkYWE4Ng=="
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={insta_icon}
                alt="a"
                className={styles["social-icons"]}
              />
            </a>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <Typography variant="h6" className={styles["social-name"]}>
            Email us
          </Typography>
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
        <Grid item md={3} xs={12}>
          <Typography variant="h6" className={styles["social-name"]}>
            Contact us
          </Typography>
          <div className={styles["contact-us"]}>
            <img src={call_icon} alt="a" style={{ marginRight: "15px" }} />
            <div>
              <Typography
                variant="subtitle1"
                className={styles["contact-detail"]}
              >
                +91 9686 90 6426
              </Typography>
              <Typography
                variant="subtitle1"
                className={styles["contact-detail"]}
              >
                +91 9742 99 8333
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <hr
        className={styles["footer-border"]}
        style={{ marginTop: mobile ? "0" : "30px" }}
      />

      <Grid container sx={{ p: { xs: "1% 10% 10% 10%", sm: "1% 5% 1% 5%" } }}>
        <Grid item md={6} xs={12}>
          <Typography
            variant="subtitle2"
            className={styles["footer-copyright"]}
          >
            Copyright © 2024 Karunadu Cricket League. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography
            variant="subtitle2"
            className={styles["footer-copyright"]}
          >
            Terms of Use
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography
            variant="subtitle2"
            className={styles["footer-copyright"]}
          >
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
