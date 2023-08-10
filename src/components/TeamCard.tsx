import {
  Avatar,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  image: string;
  text: string;
  heading: string;
}

const TeamCard = ({ image, text, heading }: Props) => (
  <Card
    zIndex={"base"}
    boxShadow={"lg"}
    variant={"elevated"}
    width={{ base: "350px", sm: "460px", md: "700px", lg: "700px" }}
    minWidth={{ base: "350px", sm: "460px", md: "700px", lg: "700px" }}
    height={{ base: "fit-content", sm: "300px" }}
  >
    <CardBody display={"flex"} flexDirection={"row"}>
      <VStack alignItems={"start"}>
        <Heading
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          mb={"5px"}
          size={"lg"}
          width={"100%"}
        >
          {heading}
          <Avatar
            display={{ base: "inherit", md: "none" }}
            ml={"auto"}
            size={"lg"}
            src={image}
          ></Avatar>
        </Heading>
        <Text>{text}</Text>
      </VStack>
      <Image
        ml={5}
        display={{ base: "none", md: "inherit" }}
        height={"260px"}
        objectFit={"cover"}
        borderRadius={10}
        src={image}
      ></Image>
    </CardBody>
  </Card>
);

export default TeamCard;
