/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styles from "./Schedule.module.scss";
import { matches } from "../../sitedata/matches";
import { useNavigate } from "react-router-dom";
import InnerBanner from "../InnerBanner/InnerBanner";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import ConfettiExplosion from "react-confetti-explosion";
import useWindowDimensions from "./useWindowDimensions";

const Schedule = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const logoBaseUrl =
    "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/team_logos%2F";
  const daysMapping = {
    Day1: "7th March 2024",
    Day2: "8th March 2024",
    Day3: "9th March 2024",
    Day4: "10th March 2024",
    Semifinals: "Semi Finals - 10th March 2024",
    Finals: "Finals - 10th March 2024",
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
  delete first2Matches["Day3"];
  delete first2Matches["Day4"];
  delete first2Matches["Finals"];
  delete first2Matches["Semifinals"];
  first2Matches["Day1"] = first2Matches["Day1"].slice(0, 2);
  const matchesToRender = isShowALl ? { ...matches } : { ...first2Matches };

  function dayCalcuator(index) {
    if (index < 4) {
      return `Day ${index + 1}`;
    } else {
      return `Day 4`;
    }
  }

  return (
    <>
      {isShowALl && <InnerBanner />}
      <Grid container sx={{ p: { xs: "10%", sm: "5%" } }}>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={1000}
        />
        <Grid item md={12} xs={12} sx={{ pl: { xs: 0, sm: "0px" } }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
          >
            MATCHES
          </Typography>
          <Typography variant="h1" className={styles["match-title"]}>
            All Matches
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
          >
            At Neharu Ground, Hubballi.
          </Typography>
          <Typography variant="h2" className={styles["final-title"]}>
            Congratulations to the winner, Sai Lions
          </Typography>
        </Grid>

        {Object.keys(matchesToRender).map((match, m_index) => {
          return (
            <Grid container spacing={2}>
              {isShowALl && (
                <Grid item md={12}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                      marginTop: m_index > 0 ? "30px" : 0,
                      color: "#e42722",
                    }}
                  >
                    {`${dayCalcuator(m_index)} - ${daysMapping[match]}`}
                  </Typography>
                </Grid>
              )}

              {matchesToRender[match].map(
                ({ team1, team2, time, url1, url2, winner }, index) => {
                  return (
                    <Grid item md={6} xs={12}>
                      {
                        <Card
                          sx={{
                            border: "1px solid #E3E3E3",
                            borderBottom: "none",
                          }}
                        >
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
                              height={mobile ? "100" : "200"}
                              image={
                                team1
                                  ? logoBaseUrl + team1 + ".png?alt=media"
                                  : url1
                              }
                              sx={{
                                objectFit: "contain",
                              }}
                            />
                            <Typography
                              variant="h1"
                              className={styles["match-vs"]}
                              sx={{ margin: { xs: "0 20px", sm: "0 50px" } }}
                            >
                              v/s
                            </Typography>
                            <CardMedia
                              className={styles["card-image"]}
                              component="img"
                              alt={"name"}
                              height={{ xs: "100px", sm: "200px" }}
                              image={
                                team2
                                  ? logoBaseUrl + team2 + ".png?alt=media"
                                  : url2
                              }
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
                              className={styles["match-info"]}
                              sx={{
                                color: "#FFF",
                                marginBottom: 0,
                                fontSize: {
                                  sm: "20px !important",
                                  xs: "10px !important",
                                },
                              }}
                            >
                              {time}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{
                                color: "#FFF",
                                fontSize: {
                                  sm: "20px !important",
                                  xs: "10px !important",
                                },
                              }}
                            >
                              {daysMapping[match]}
                            </Typography>
                          </CardContent>
                          {winner && (
                            <CardContent className={styles["match-winner"]}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                className={styles["match-info"]}
                                sx={{
                                  color: "#FFF",
                                  marginBottom: 0,
                                  fontWeight: "600",
                                  fontSize: {
                                    sm: "20px !important",
                                    xs: "10px !important",
                                  },
                                }}
                              >
                                {winner}
                              </Typography>
                            </CardContent>
                          )}
                        </Card>
                      }
                    </Grid>
                  );
                }
              )}
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
