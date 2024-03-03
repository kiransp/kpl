import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import styles from "./Schedule.module.scss";
import { matches } from "../../sitedata/matches";
import { useNavigate } from "react-router-dom";
import InnerBanner from "../InnerBanner/InnerBanner";
import { useEffect, useState } from "react";

const Schedule = () => {
  const navigate = useNavigate();
  const logoBaseUrl =
    "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/team_logos%2F";
  const daysMapping = {
    Day1: "6th March 2024",
    Day2: "6th March 2024",
  };
  const [isShowALl, setIsShowAll] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/allmatches") {
      setIsShowAll(true);
      window.scrollTo(0, 0);
    } else {
      setIsShowAll(false);
    }
  }, []);

  let first2Matches = { ...matches };
  delete first2Matches["Day2"];
  first2Matches["Day1"] = first2Matches["Day1"].slice(0, 2);
  const matchesToRender = isShowALl ? { ...matches } : { ...first2Matches };
  return (
    <>
      {isShowALl && <InnerBanner />}
      <Grid container sx={{ p: { xs: "10%", sm: "5%" } }}>
        <Grid item md={12} xs={12} sx={{ pl: { xs: 0, sm: "30px" } }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
          >
            MATCHES
          </Typography>
          <Typography variant="h1" className={styles["match-title"]}>
            Upcoming Matches
          </Typography>
        </Grid>
        {Object.keys(matchesToRender).map((match, m_index) => {
          return (
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
                >
                  {daysMapping[match]}
                </Typography>
              </Grid>
              {matchesToRender[match].map(({ team1, team2, time }, index) => {
                return (
                  <Grid item md={6} xs={12}>
                    {
                      <Card sx={{ border: "1px solid #E3E3E3" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CardMedia
                            className={styles["card-image"]}
                            component="img"
                            alt={"name"}
                            height="200"
                            image={logoBaseUrl + team1 + ".png?alt=media"}
                            sx={{
                              objectFit: "contain",
                            }}
                          />
                          <Typography
                            variant="h1"
                            className={styles["match-vs"]}
                          >
                            v/s
                          </Typography>
                          <CardMedia
                            className={styles["card-image"]}
                            component="img"
                            alt={"name"}
                            height="200"
                            image={logoBaseUrl + team2 + ".png?alt=media"}
                            sx={{
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <CardContent className={styles["match-time"]}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#FFF" }}
                          >
                            {time}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#FFF" }}
                          >
                            {daysMapping[match]}
                          </Typography>
                        </CardContent>
                      </Card>
                    }
                  </Grid>
                );
              })}
              {!isShowALl && (
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    className={styles["view-all-btn"]}
                    sx={{
                      fontSize: { xs: "14px", sm: "20px" },
                      padding: { xs: "10px", sm: "15px 20px 14px" },
                      "&:hover": {
                        backgroundColor: "#FFFF00 !important",
                        color: "#000 !important",
                        border: "none !important",
                      },
                    }}
                    onClick={() => navigate("/allmatches")}
                  >
                    View All
                  </Button>
                </Grid>
              )}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Schedule;
