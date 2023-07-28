import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
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
        <CardHeader fontWeight={"bold"} fontSize="1.5rem">
          Welcome
        </CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aliquam
          iusto consequuntur quaerat fuga et neque facilis quam debitis
          voluptatibus culpa omnis hic exercitationem voluptas, nostrum nam
          ullam velit magnam!
        </CardBody>
      </Card>
      <Image
        boxShadow={"lg"}
        display={{ base: "none", md: "inherit", lg: "inherit" }}
        height={"300px"}
        objectFit={"cover"}
        borderRadius={"10px"}
        src={robert}
      ></Image>
      <Image
        boxShadow={"lg"}
        display={{ base: "none", md: "none", lg: "inherit" }}
        borderRadius={"10px"}
        height={"300px"}
        src={tonya}
      ></Image>
      ,
    </HStack>
  );
};

export default TeamContent;
