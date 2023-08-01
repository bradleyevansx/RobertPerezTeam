import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
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
          <Home></Home>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
