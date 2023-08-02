import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import logo from "../assets/photos/logo.png";

const letterSpacing = "2px";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        justifyContent={"center"}
        width={"100%"}
        position={"fixed"}
        top={"0"}
        left={"0"}
      >
        <HStack
          justifyContent={"space-between"}
          margin={"10px 50px"}
          width={"100%"}
          borderRadius={"2xl"}
          bg={"whitesmoke"}
          padding={{ base: "0 20px", md: "0 20px" }}
          shadow="xl"
        >
          <Image src={logo} height="75px"></Image>
          {isMobile ? (
            <IconButton
              onClick={onOpen}
              margin={"auto 0"}
              isRound={true}
              variant="outline"
              aria-label="Done"
              fontSize="20px"
              icon={<HamburgerIcon />}
            />
          ) : (
            <HStack justifyContent={"space-between"} gap={5}>
              <Link letterSpacing={letterSpacing}>Home</Link>
              <Link whiteSpace={"nowrap"} letterSpacing={letterSpacing}>
                About Us
              </Link>
              <Link letterSpacing={letterSpacing}>Reviews</Link>
              <Button colorScheme="blackAlpha">Contact</Button>
            </HStack>
          )}
        </HStack>
      </HStack>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign={"center"} borderBottomWidth="1px">
            Robert Perez
          </DrawerHeader>
          <DrawerBody>
            <VStack mt={5} gap={7}>
              <Link letterSpacing={letterSpacing}>Home</Link>
              <Link whiteSpace={"nowrap"} letterSpacing={letterSpacing}>
                About Us
              </Link>
              <Link letterSpacing={letterSpacing}>Reviews</Link>
              <Button colorScheme="blackAlpha">Contact</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
