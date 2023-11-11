import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./globalComponents/Header";
const theme = createTheme({
  // Override or create new styles, colors, palettes...
  palette: {
    primary: {
      main: "#1b5c94",
    },
    icons: {
      main: "#FFF",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
      </header>
    </ThemeProvider>
  );
}

export default App;
