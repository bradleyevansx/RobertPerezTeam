import robert from "../../assets/photos/Robert.jpg";
import tonya from "../../assets/photos/Tonya.jpg";

import TeamCard from "../../components/TeamCard";
import AboutUsHeader from "./AboutUsHeader";

import { Box, HStack } from "@chakra-ui/react";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import JoinTheTeam from "./JoinTheTeam";

const tonyaText =
  "Tonya has been a resident of Florida for over 30 years. She is always accessible via email or phone and is eager to help you find a place to call your forever home. Buying and selling a home takes time, knowledge, and an expert in negotiation. With Tonya's additional legal and finance background, she will progress along the entire process with you, from the very first steps to the moment you close the deal and beyond.";
const robertText =
  "Robert is the team leader of the Robert Perez Team at Keller Williams Suburban Tampa. He has been a REALTOR® since 2016 and has lived in Tampa Bav Area for over 16 years. With his connections from living in the area and working as an agent, he is able to assist clients in numerous ways. Robert is a full-service, bilingual, and award-winning real estate agent. He is always available to help you achieve your goals!";

const AboutUs = () => {
  return (
    <Box overflow={"hidden"}>
      <AboutUsHeader />
      <HStack
        mt={5}
        height={{ base: "431px", sm: "350px" }}
        bgGradient={"linear(to-r, whitesmoke, gray.200)"}
        ps={{ base: 0, sm: 5, md: 50, "2xl": 0 }}
        justifyContent={{ base: "center", sm: "start", "2xl": "center" }}
      >
        <TeamCard
          text={robertText}
          heading="Robert Perez - Team Leader"
          image={robert}
        ></TeamCard>
        <Box ms={5} display={{ base: "none", "2xl": "inherit" }}>
          <TeamCard
            text={tonyaText}
            heading="Tonya Coglianese - REALTOR®"
            image={tonya}
          ></TeamCard>
        </Box>
      </HStack>
      <HStack height={{ base: "250px", sm: "350px" }} justifyContent={"center"}>
        <ImageCarousel></ImageCarousel>
      </HStack>
      <HStack
        display={{ base: "flex", "2xl": "none" }}
        height={{ base: "431px", sm: "350px" }}
        bgGradient={"linear(to-r, gray.200, whitesmoke 90%)"}
        pe={{ base: 0, sm: 5, md: 50 }}
        justifyContent={{ base: "center", sm: "end" }}
      >
        <TeamCard
          text={tonyaText}
          heading="Tonya Coglianese - REALTOR®"
          image={tonya}
        ></TeamCard>
      </HStack>
      <JoinTheTeam></JoinTheTeam>
    </Box>
  );
};

export default AboutUs;
