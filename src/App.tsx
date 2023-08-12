import Footer from "./components/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/nav/NavBar";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Grid
        overflowX={"hidden"}
        bg={"whitesmoke"}
        templateAreas={{
          base: `"nav" "main"`,
        }}
        templateColumns={{ base: "1fr" }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>

          <Footer />
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
