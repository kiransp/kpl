import Carousel from "nuka-carousel";
import { teamLogos } from "../../Images";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const TeamsCarousel = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      sx={{ p: { xs: "10%", sm: "5%" }, backgroundColor: "#000" }}
      id="Teams"
    >
      <Grid item sm={12} xs={12}>
        <Typography
          variant="h1"
          sx={{ fontWeight: "800", marginBottom: "20px", color: "#FFF" }}
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
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#000",
            border: "1px solid #FFF",
            fontFamily: "Montserrat",
            fontSize: { xs: "14px", sm: "20px" },
            fontWeight: "800",
            borderRadius: "0",
            padding: { xs: "10px", sm: "15px 20px 14px" },
            textTransform: "none",
            marginTop: "30px",
            "&:hover": {
              backgroundColor: "#FFFF00",
              color: "#000",
              border: "none",
            },
          }}
          onClick={() => navigate("/allteams")}
        >
          View All
        </Button>
      </Grid>
    </Grid>
  );
};

export default TeamsCarousel;
