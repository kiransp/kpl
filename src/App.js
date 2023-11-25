import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./globalComponents/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";

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
      fontSize: "4rem",
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
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
        <footer>
          <h1>Footer comes here</h1>
        </footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
