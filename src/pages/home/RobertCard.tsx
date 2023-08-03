import {
  Image,
  Avatar,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  image: string;
  text: string;
  heading: string;
}

const RobertCard = ({ image, text, heading }: Props) => (
  <Card
    boxShadow={"lg"}
    variant={"filled"}
    width={{ base: "350px", sm: "460px", md: "700px", lg: "900px" }}
    minWidth={{ base: "350px", sm: "460px", md: "700px", lg: "900px" }}
    height="300px"
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
        display={{ base: "none", md: "inherit" }}
        height={"260px"}
        objectFit={"cover"}
        borderRadius={10}
        src={image}
      ></Image>
    </CardBody>
  </Card>
);

export default RobertCard;
