import { Card, CardMedia, Grid, Typography } from "@mui/material";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import styles from "./AllTeams.module.scss";
import { teamLogos } from "../../Images";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const AllTeams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <Grid
        container
        rowSpacing={15}
        sx={{ p: { xs: "10%", sm: "5%", backgroundColor: "#000" } }}
      >
        <Grid item sm={12}>
          <Typography
            variant="h1"
            className={styles["hg-heading"]}
            sx={{
              my: { xs: "30px", sm: "20px", color: "#FFF" },
              marginBottom: "-5% !important",
            }}
          >
            Registered Teams
          </Typography>
        </Grid>
        {teamLogos.map(({ logo, name }) => (
          <Grid item sm={3} xs={12} sx={{ textAlign: "center" }}>
            <Link to={`/teamdetails/${name}`}>
              <Card sx={{ backgroundColor: "#000" }}>
                <CardMedia
                  component="img"
                  alt={name}
                  height="200"
                  image={logo}
                  sx={{
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllTeams;
