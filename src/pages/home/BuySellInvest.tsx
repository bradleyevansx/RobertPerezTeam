import { Heading, HStack, VStack, Image, Divider } from "@chakra-ui/react";
import bathroom2 from "../../assets/photos/Bathroom2.webp";
import kitchen7 from "../../assets/photos/Kitchen7.jpg";
import pool1 from "../../assets/photos/Pool1.jpg";

const images = [
  { image: bathroom2, text: "Buying" },
  { image: kitchen7, text: "Selling" },
];

export function BuySellInvest({}) {
  return (
    <VStack
      shadow={"0 0 10px lightgray"}
      padding={2}
      bg={"gray.100"}
      alignItems={"center"}
    >
      <HStack
        justifyContent={"space-around"}
        width={{
          base: "359px",
          md: "600px",
        }}
        overflow="hidden"
      >
        {images.map((obj) => (
          <VStack>
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
      <HStack justifyContent={"center"} width={"359px"} overflow="hidden">
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
