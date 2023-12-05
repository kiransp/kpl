import { Grid, Typography } from "@mui/material";
import styles from "./Prize.module.scss";
import { cupDT } from "../../Images";

const Prize = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#E52D25", p: { xs: "10%", sm: "5%" } }}
    >
      <Grid item sm={6} xs={12}>
        <Typography variant="h1" sx={{ color: "#FFF", fontWeight: "800" }}>
          Prize Money
        </Typography>
        <div style={{ margin: "30px 0" }}>
          <Typography variant="h3" className={styles["prize-title"]}>
            Winner
          </Typography>
          <Typography variant="h1" className={styles["prize-value"]}>
            4,00,000/-
          </Typography>
        </div>
        <div>
          <Typography variant="h3" className={styles["prize-title"]}>
            Runner Up
          </Typography>
          <Typography variant="h1" className={styles["prize-value"]}>
            3,33,000/-
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        sm={6}
        xs={12}
        sx={{ display: "flex", justifyContent: "center", mt: { xs: "40px" } }}
      >
        <img src={cupDT} alt="cup" width="60%" />
      </Grid>
    </Grid>
  );
};

export default Prize;
