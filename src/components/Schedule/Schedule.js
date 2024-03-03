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

const Schedule = () => {
  const navigate = useNavigate();
  const logoBaseUrl =
    "https://firebasestorage.googleapis.com/v0/b/kplcricket-d5078.appspot.com/o/team_logos%2F";
  const daysMapping = {
    Day1: "6th March 2024",
  };
  return (
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
      {Object.keys(matches).map((match) => (
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
            >
              {daysMapping[match]}
            </Typography>
          </Grid>
          {matches[match].map(({ team1, team2, time }, index) => (
            <Grid item md={6} xs={12}>
              {index < 4 && (
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
                    <Typography variant="h1" className={styles["match-vs"]}>
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
              )}
            </Grid>
          ))}
          <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#FFF",
                border: "1px solid #000",
                fontFamily: "Montserrat",
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: "800",
                borderRadius: "0",
                padding: { xs: "10px", sm: "15px 20px 14px" },
                textTransform: "none",
                marginTop: "30px",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#FFFF00",
                  color: "#000",
                  border: "none",
                },
              }}
              onClick={() => navigate("/allmacthes")}
            >
              View All
            </Button>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Schedule;
