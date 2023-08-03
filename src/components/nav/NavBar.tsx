import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import logo from "../../assets/photos/logo.png";
import Links from "./Links";

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
        zIndex={100}
        justifyContent={"center"}
        width={"100%"}
        position={"fixed"}
        top={"0"}
        left={"0"}
      >
        <HStack
          justifyContent={"space-between"}
          margin={"10px 30px"}
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
              <Links />
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
              <Links />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
