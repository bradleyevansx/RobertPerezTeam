import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const letterSpacing = "2px";

interface Props {
  onClose?: () => void;
}

const Links = ({ onClose }: Props) => {
  const handleClick = () => (onClose ? onClose() : () => {});
  return (
    <>
      <ChakraLink
        onClick={handleClick}
        as={ReactRouterLink}
        to="/"
        letterSpacing={letterSpacing}
      >
        Home
      </ChakraLink>
      <ChakraLink
        onClick={handleClick}
        as={ReactRouterLink}
        to="/about-us"
        whiteSpace={"nowrap"}
        letterSpacing={letterSpacing}
      >
        About Us
      </ChakraLink>
      <a
        onClick={handleClick}
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfyd_yCoIg8R0uNnyXl81LjwLf-tPEF-OJIixxQ3ZhwIisZWQ/viewform?usp=sf_link"
      >
        <Button colorScheme="blackAlpha">Contact</Button>
      </a>
    </>
  );
};

export default Links;
