import { useTheme } from "@emotion/react";
import { innerBannerDT, inerBannerMB } from "../../Images";
import { useMediaQuery } from "@mui/material";

const InnerBanner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ display: "flex" }}>
      <img
        src={mobile ? inerBannerMB : innerBannerDT}
        width="100%"
        alt="inner banner"
      />
    </div>
  );
};

export default InnerBanner;
