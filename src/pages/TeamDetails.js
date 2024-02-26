import { useEffect } from "react";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import { useParams } from "react-router-dom";
import { teamLogos } from "../Images";
import _ from "lodash";
import { Grid } from "@mui/material";

const TeamDetails = () => {
  const { teamname } = useParams();

  const { owner } = _.find(teamLogos, { name: teamname });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <Grid
        container
        sx={{ p: { xs: "10%", sm: "5%", backgroundColor: "#000" } }}
      >
        <Grid item sm={12} xs={12} sx={{ textAlign: "center" }}>
          <img src={owner} width="60%" alt="team details " />
        </Grid>
      </Grid>
    </>
  );
};

export default TeamDetails;
