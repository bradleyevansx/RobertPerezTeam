import { Box, Heading, Image } from "@chakra-ui/react";
import house1 from "../assets/photos/House1.webp";
import ContactSection from "./ContactSection";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        gap={{ base: 8 }}
        pt={{ base: "130px", sm: 20 }}
        ps={{ base: 2, sm: 5 }}
        pe={{ base: 2, sm: 5 }}
        justifyContent="space-between"
        alignItems={"center"}
        bg={"red.500"}
        height={"50vh"}
      >
        <Heading
          textShadow={"2xl"}
          fontFamily={"sans-serif"}
          color={"white"}
          fontSize={{ base: "5xl" }}
          whiteSpace={"nowrap"}
        >
          Let's get you
          <br /> moving today.
        </Heading>
        <Image
          boxShadow={"lg"}
          height={"300px"}
          width={"375px"}
          objectFit={"cover"}
          borderRadius={"2xl"}
          src={house1}
        ></Image>
      </Box>
      <ContactSection></ContactSection>
      <Welcome></Welcome>
    </>
  );
};

export default Home;
