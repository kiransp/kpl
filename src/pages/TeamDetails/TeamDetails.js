import { useEffect } from "react";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { teams } from "../../sitedata/teams";
import { teamNames } from "../../sitedata/teamNames";
import styles from "./TeamDetails.module.scss";
import _ from "lodash";

const TeamDetails = () => {
  const { teamname } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <Grid
        container
        spacing={2}
        sx={{ p: { xs: "10%", sm: "5%", backgroundColor: "#000" } }}
      >
        <Grid item sm={12}>
          <Typography
            variant="body1"
            className={styles["hg-title"]}
            sx={{ fontFamily: "Montserrat", fontWeight: "600" }}
          >
            Players
          </Typography>
          <Typography
            variant="h1"
            className={styles["hg-heading"]}
            sx={{ my: { xs: "30px", sm: "20px" } }}
          >
            {teamNames[teamname]}
          </Typography>
        </Grid>
        {_.sortBy(teams[teamname], ["name"]).map(({ photo, name }) => (
          <Grid item sm={3} xs={12} sx={{ textAlign: "center" }}>
            <Card sx={{ backgroundColor: "#000" }}>
              <CardMedia
                component="img"
                alt={name}
                height="200"
                image={photo}
                sx={{
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#FFF" }}
                  className={styles["player-name"]}
                >
                  {name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TeamDetails;
