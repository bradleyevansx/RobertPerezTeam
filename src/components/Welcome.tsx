import {
  Avatar,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import robert from "../assets/photos/Robert.jpg";

const Welcome = () => {
  return (
    <HStack justify={"center"} padding={"10px"}>
      <Card
        boxShadow={"lg"}
        variant={"filled"}
        width={{ base: "350px", sm: "460px", md: "350px", lg: "500px" }}
        minWidth={{ base: "350px", sm: "460px", md: "350px", lg: "500px" }}
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
            Welcome <Avatar size={"lg"} src={robert}></Avatar>
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            aliquam iusto consequuntur quaerat fuga et neque facilis quam
            debitis voluptatibus culpa omnis hic exercitationem voluptas,
            nostrum nam ullam velit magnam!
          </Text>
        </CardBody>
      </Card>
    </HStack>
  );
};

export default Welcome;
