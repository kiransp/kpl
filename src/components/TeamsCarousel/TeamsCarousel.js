import Carousel from "nuka-carousel";
import { teamLogos } from "../../Images";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const TeamsCarousel = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container sx={{ p: { xs: "10%", sm: "5%" } }}>
      <Grid item sm={12} xs={12}>
        <Typography
          variant="h1"
          sx={{ fontWeight: "800", marginBottom: "20px" }}
        >
          Registered Teams
        </Typography>
        <Carousel
          slidesToShow={mobile ? 1 : 5}
          wrapAround={true}
          autoplay={true}
          cellAlign={"center"}
          // cellSpacing={30}
          // renderCenterLeftControls={({ previousSlide }) => null}
          // renderCenterRightControls={({ nextSlide }) => null}
        >
          {teamLogos.map(({ logo, name }) => (
            <Link to={`/teamdetails/${name}`}>
              <div style={{ margin: "20px" }}>
                <img src={logo} alt="ok" width="100%" />
              </div>
            </Link>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default TeamsCarousel;
