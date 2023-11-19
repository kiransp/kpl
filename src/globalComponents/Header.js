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
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "./Header.module.scss";

const drawerWidth = 240;
const navItems = ["About", "Tournaments", "Gallery", "Contact Us"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={index === 0 ? "/" : item}
                key={item}
                className={styles["nav-link-mobile"]}
              >
                <ListItemText primary={item} />
              </Link>
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
        <Toolbar sx={{ justifyContent: "end", mt: "3%", mr: "6%" }}>
          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <>
                <Link
                  to={index === 0 ? "/" : item}
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
                </Link>
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
            <MenuIcon />
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
