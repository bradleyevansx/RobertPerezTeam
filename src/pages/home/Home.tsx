import { Heading, HStack, VStack } from "@chakra-ui/react";
import { easeIn, motion } from "framer-motion";
import { BuySellInvest } from "./BuySellInvest";
import ContactSection from "./ContactSection";
import Experiences from "./Experiences";
import HomeHeading from "./HomeHeading";
import LocationsWeServe from "./LocationsWeServe";

const Home = () => {
  return (
    <>
      <HomeHeading />
      <ContactSection />
      <HStack
        margin={"0 auto"}
        mb={{ base: 0, lg: 50 }}
        maxWidth={"1051px"}
        justifyContent={"center"}
      >
        <LocationsWeServe />
      </HStack>
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: easeIn },
        }}
      >
        <Heading
          color={"red.500"}
          margin={"0 auto"}
          mb={{ base: 0, lg: 50 }}
          width={{ base: "unset", lg: "800px" }}
          textAlign={"center"}
          padding={5}
          fontSize={{ base: "2xl", lg: "4xl" }}
        >
          Robert Perez Team is ready to assist buyers, sellers, and investors
          interested in the Greater Tampa Bay Area.
        </Heading>
      </motion.div>
      <BuySellInvest />
      <VStack bg={"gray.100"} pt={5} boxShadow={"0 0 7px lightgray"}>
        <Experiences></Experiences>
      </VStack>
    </>
  );
};

export default Home;
