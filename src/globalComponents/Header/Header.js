import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./Header.module.scss";
import { NavHashLink } from "react-router-hash-link";

const drawerWidth = 240;
const navItems = ["About", "Gallery", "Contact Us"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile menu
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#FFF" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        KPL
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <NavHashLink
                smooth
                to={`/#${item}`}
                key={item}
                className={styles["nav-link-mobile"]}
              >
                <ListItemText primary={item} sx={{ color: "#FFF" }} />
              </NavHashLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={styles["nav-bar"]}
        sx={{ position: "absolute" }}
      >
        <Toolbar
          sx={{ justifyContent: "end", mt: "3%", mr: { xs: "0", sm: "6%" } }}
        >
          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <>
                <NavHashLink
                  smooth
                  to={`/#${item}`}
                  key={item}
                  className={
                    index === navItems.length - 1
                      ? styles["dislodged-border"]
                      : styles["nav-link-desktop"]
                  }
                >
                  {index === navItems.length - 1 ? (
                    <span style={{ display: "flex" }}>
                      {item} <ArrowRightAltIcon />
                    </span>
                  ) : (
                    <>{item}</>
                  )}
                </NavHashLink>
              </>
            ))}
          </Box>
          <IconButton
            color="icons"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              //   mr: 2,
              display: {
                sm: "none",
                justifyContent: "flex-end",
                xs: "flex",
              },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#000",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
