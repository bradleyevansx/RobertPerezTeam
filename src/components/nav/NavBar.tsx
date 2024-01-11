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

import { Link as ReactRouterLink } from "react-router-dom";

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
        zIndex={"overlay"}
        position={"fixed"}
        width={"100%"}
        justifyContent={"center"}
      >
        <HStack
          maxW={"1570px"}
          justifyContent={"center"}
          width={"100%"}
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
            <ReactRouterLink to="/">
              <Image src={logo} height="75px"></Image>
            </ReactRouterLink>
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
                <Links onClose={onClose} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};

export default NavBar;
