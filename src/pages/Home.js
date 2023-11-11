import { Button, Grid, Typography } from "@mui/material";
import { bannerImgae } from "../Images";

const Home = () => {
  return (
    <Grid container>
      <Grid
        item
        md={12}
        sx={{
          background:
            "radial-gradient(690.87% 145.6% at 17.03% 29.86%,yellow 1.84%, #D22B2B 54.31%, #FFF 100%)",
        }}
      >
        <Grid container>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              Welcome to KPL
            </Typography>
            <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
              Karunadu Premier Leauge
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: "20px" }}>
              Register Now
            </Button>
          </Grid>
          <Grid item md={6}>
            <img src={bannerImgae} width={"100%"} alt="hero banner" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
