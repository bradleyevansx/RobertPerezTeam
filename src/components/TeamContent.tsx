import {
  Avatar,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import robert from "../assets/photos/Robert.jpg";
import tonya from "../assets/photos/Tonya.jpg";

const TeamContent = () => {
  return (
    <HStack justify={"center"} padding={"10px"}>
      <Card
        boxShadow={"lg"}
        variant={"filled"}
        width={{ base: "350px", md: "500px" }}
        minWidth={{ base: "350px", md: "500px" }}
        height="300px"
      >
        <CardBody>
          <Heading
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            mb={"5px"}
            size={"lg"}
          >
            Welcome{" "}
            <Avatar
              display={{ base: "inherit", sm: "none", md: "none" }}
              size={"lg"}
              src={robert}
            ></Avatar>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            aliquam iusto consequuntur quaerat fuga et neque facilis quam
            debitis voluptatibus culpa omnis hic exercitationem voluptas,
            nostrum nam ullam velit magnam!
          </Text>
        </CardBody>
      </Card>
      <Image
        boxShadow={"lg"}
        display={{ base: "none", sm: "inherit", md: "inherit", lg: "inherit" }}
        height={"300px"}
        objectFit={"cover"}
        borderRadius={"10px"}
        src={robert}
      ></Image>
      <Image
        boxShadow={"lg"}
        display={{ base: "none", sm: "none", md: "none", lg: "inherit" }}
        borderRadius={"10px"}
        height={"300px"}
        src={tonya}
      ></Image>
    </HStack>
  );
};

export default TeamContent;
