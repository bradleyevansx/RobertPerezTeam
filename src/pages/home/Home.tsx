import { HStack } from "@chakra-ui/react";
import ContactSection from "./ContactSection";
import HomeHeading from "./HomeHeading";
import RobertCard from "./RobertCard";
import robert from "../../assets/photos/Robert.jpg";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam iusto consequuntur quaerat fuga et neque facilis quam debitis voluptatibus culpa omnis hic exercitationem voluptas, nostrum nam ullam velit magnam!";

const Home = () => {
  return (
    <>
      <HomeHeading />
      <ContactSection />
      <HStack
        mt={{ base: 0, lg: 0, xl: 30, "2xl": 150 }}
        justify={"center"}
        padding={"10px"}
      >
        <RobertCard text={text} heading={"Welcome"} image={robert} />
      </HStack>
    </>
  );
};

export default Home;
