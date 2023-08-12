import { HStack, Text } from "@chakra-ui/react";
import { easeIn, motion } from "framer-motion";
import { BuySellInvest } from "./BuySellInvest";
import ContactSection from "./ContactSection";
import HomeHeading from "./HomeHeading";
import LocationsWeServe from "./LocationsWeServe";

const Home = () => {
  return (
    <>
      <HomeHeading />
      <ContactSection />
      <HStack margin={"0 auto"} maxWidth={"1051px"} justifyContent={"center"}>
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
        <Text textAlign={"center"} padding={5} fontSize={"2xl"}>
          Robert Perez Team is ready to assist buyers, sellers, and investors
          interested in the Greater Tampa Bay Area.
        </Text>
      </motion.div>
      <BuySellInvest />
    </>
  );
};

export default Home;
