import house1 from "../../assets/photos/ExtHouse10.webp";
import { Box, Heading, Image } from "@chakra-ui/react";
import useViewportHeight from "../../hooks/useViewportHeight";

const HomeHeading = () => {
  const availableHeight = useViewportHeight();

  return (
    <Box
      maxWidth={"1570px"}
      margin={"0 auto"}
      display={"flex"}
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: 8, lg: 0 }}
      pt={{ base: "130px", md: 20 }}
      ps={{ base: 2, sm: 5 }}
      pe={{ base: 2, sm: 5 }}
      justifyContent="space-between"
      alignItems={"center"}
      bg={"red.500"}
      height={{ base: "342px", md: availableHeight * 0.5 }}
      borderBottomRadius={{ base: "none", "2xl": "xl" }}
    >
      <Heading
        textShadow={"2xl"}
        fontFamily={"sans-serif"}
        color={"white"}
        fontSize={{ base: "5xl", lg: "7xl" }}
        whiteSpace={"nowrap"}
      >
        Let's get you
        <br /> moving today.
      </Heading>
      <Image
        mt={{ base: 0, md: 3, lg: 125, xl: 200, "2xl": "300" }}
        boxShadow={"lg"}
        height={{ base: "300px", lg: "375px", xl: "500px", "2xl": "600px" }}
        width={{ base: "375px", lg: "450px", xl: "700px", "2xl": "1000px" }}
        objectFit={"cover"}
        borderRadius={"2xl"}
        src={house1}
      ></Image>
    </Box>
  );
};

export default HomeHeading;
