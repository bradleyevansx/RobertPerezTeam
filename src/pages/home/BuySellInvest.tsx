import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import bathroom2 from "../../assets/photos/Bathroom2.webp";
import kitchen7 from "../../assets/photos/Kitchen7.jpg";
import pool1 from "../../assets/photos/Pool1.jpg";

const mobileImages = [
  { image: bathroom2, text: "Buying" },
  { image: kitchen7, text: "Selling" },
];

const desktopImages = [
  { image: bathroom2, text: "Buying" },
  { image: kitchen7, text: "Selling" },
  { image: pool1, text: "Investing" },
];

export function BuySellInvest({}) {
  return (
    <VStack mb={50} padding={2} alignItems={"center"}>
      <HStack
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-around"}
        width={{
          base: "359px",
          md: "600px",
        }}
        overflow="hidden"
      >
        {mobileImages.map((obj, index) => (
          <VStack key={index}>
            <Heading color={"#444"}>{obj.text}</Heading>
            <Image
              objectFit={"cover"}
              borderRadius={"75px"}
              height={"150px"}
              width={"150px"}
              src={obj.image}
            ></Image>
          </VStack>
        ))}
      </HStack>
      <HStack
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-around"}
        width={{
          base: "359px",
          md: "600px",
        }}
        overflow="hidden"
      >
        {desktopImages.map((obj, index) => (
          <VStack key={index}>
            <Heading color={"#444"}>{obj.text}</Heading>
            <Image
              objectFit={"cover"}
              borderRadius={"75px"}
              height={"150px"}
              width={"150px"}
              src={obj.image}
            ></Image>
          </VStack>
        ))}
      </HStack>
      <HStack
        display={{ base: "flex", md: "none" }}
        justifyContent={"center"}
        width={"359px"}
        overflow="hidden"
      >
        <VStack>
          <Heading color={"#444"}>Investing</Heading>
          <Image
            objectFit={"cover"}
            borderRadius={"75px"}
            height={"150px"}
            width={"150px"}
            src={pool1}
          ></Image>
        </VStack>
      </HStack>
    </VStack>
  );
}
