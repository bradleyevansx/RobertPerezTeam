import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const letterSpacing = "2px";

const Links = () => {
  return (
    <>
      <ChakraLink as={ReactRouterLink} to="/" letterSpacing={letterSpacing}>
        Home
      </ChakraLink>
      <ChakraLink
        as={ReactRouterLink}
        to="/about-us"
        whiteSpace={"nowrap"}
        letterSpacing={letterSpacing}
      >
        About Us
      </ChakraLink>
      <Button colorScheme="blackAlpha">Contact</Button>
    </>
  );
};

export default Links;
