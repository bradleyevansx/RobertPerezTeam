import { HStack, Text } from "@chakra-ui/react";
import SocialsCard from "./SocialsCard";
const Footer = () => {
  return (
    <HStack
      padding={5}
      boxShadow={"0 0 10px lightgray"}
      bg={"gray.400"}
      height={"100px"}
    >
      <Text>© 2023 Robert Perez Team. All Rights Reserved.</Text>
      <SocialsCard></SocialsCard>
    </HStack>
  );
};

export default Footer;
