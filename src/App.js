import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./globalComponents/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Tournaments from "./pages/Tournaments";
import Footer from "./globalComponents/Footer/Footer";
import Gallery from "./pages/Gallery";
import Registration from "./pages/Registration";
import Admin from "./pages/Admin";

const theme = createTheme({
  // Override or create new styles, colors, palettes...
  palette: {
    // primary: {
    //   // main: "#19398a",
    // },
    icons: {
      main: "#FFF",
    },
    textColor: {
      main: "#FFF",
    },
  },
  typography: {
    h1: {
      fontSize: "64px",
      lineHeight: "64px",
      fontFamily: "Montserrat",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "36px",
        lineHeight: "36px",
      },
    },
    h3: {
      fontSize: "24px",
      lineHeight: "64px",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "20px",
        lineHeight: "36px",
      },
    },
    h6: {
      fontSize: "20px",
      // lineHeight: "64px",
      fontFamily: "Montserrat",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "16px",
        lineHeight: "36px",
      },
    },
    body1: {
      fontSize: "16px",
      fontFamily: "Montserrat",
      // lineHeight: "64px",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "14px",
        lineHeight: "36px",
      },
    },
    subtitle1: {
      fontFamily: "Montserrat",
      fontSize: "22px",
      // lineHeight: "64px",
      fontWeight: "600",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "20px",
      },
    },
    subtitle2: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      // lineHeight: "64px",
      fontWeight: "400",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "14px",
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tournaments" element={<Tournaments />} /> */}
          <Route
            path="/Gallery"
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Registration />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Admin />
              </>
            }
          />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
