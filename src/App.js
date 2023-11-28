import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./globalComponents/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Tournaments from "./pages/Tournaments";
import Footer from "./globalComponents/Footer/Footer";

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
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "36px",
        lineHeight: "36px",
      },
    },
    h3: {
      fontSize: "40px",
      lineHeight: "64px",
      "@media (max-width:600px)": {
        // for mobile screens
        fontSize: "36px",
        lineHeight: "36px",
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div>
        <h1>Hello </h1>
      </div> */}
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/tournaments" element={<Tournaments />} /> */}
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
