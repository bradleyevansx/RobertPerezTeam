import { Box, Image } from "@chakra-ui/react";
import headerPhoto from "../../assets/photos/AboutUsHeaderPhoto.png";
import useViewportHeight from "../../hooks/useViewportHeight";

const AboutUsHeader = () => {
  const availableHeight = useViewportHeight();
  return (
    <Box
      borderBottomRadius={{ base: "none", "2xl": "lg" }}
      maxWidth={"1570px"}
      margin={"0 auto"}
      overflow={"hidden"}
      height={{
        base: availableHeight * 0.32,
        md: availableHeight * 0.4,
        xl: availableHeight * 0.5,
        "2xl": availableHeight * 0.6,
      }}
    >
      <Image
        width={"100vw"}
        src={headerPhoto}
        objectFit={"cover"}
        height={{
          base: availableHeight * 0.45,
          md: availableHeight * 0.5,
          xl: availableHeight * 0.6,
          "2xl": availableHeight * 0.7,
        }}
      />
    </Box>
  );
};

export default AboutUsHeader;
