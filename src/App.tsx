import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import CenterSection from "./components/CenterSection";
import HomePageCenter from "./components/CenterSection";
import ContactSection from "./components/ContactSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
        }}
        templateColumns={{ base: "1fr" }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="main">
          <CenterSection></CenterSection>
          <ContactSection></ContactSection>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
