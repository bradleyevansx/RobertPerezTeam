import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import logo from "../assets/photos/logo.png";

const letterSpacing = "2px";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <HStack
        padding={{ base: "0 15px", md: "0 40px" }}
        justifyContent={"space-between"}
        boxShadow="0 0 10px white"
      >
        <Image src={logo} width="275px"></Image>
        {isMobile ? (
          <IconButton
            margin={"auto 0"}
            isRound={true}
            variant="outline"
            aria-label="Done"
            fontSize="20px"
            icon={<HamburgerIcon />}
          />
        ) : (
          <HStack justifyContent={"space-between"} gap="50px">
            <Link letterSpacing={letterSpacing}>Home</Link>
            <Link whiteSpace={"nowrap"} letterSpacing={letterSpacing}>
              About Us
            </Link>
            <Button colorScheme="blackAlpha">Contact</Button>
          </HStack>
        )}
      </HStack>
    </>
  );
};

export default NavBar;
