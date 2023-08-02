import {
  Image,
  Avatar,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import robert from "../assets/photos/Robert.jpg";

const Welcome = () => (
  <HStack
    mt={{ base: 0, lg: 0, xl: 30, "2xl": 150 }}
    justify={"center"}
    padding={"10px"}
  >
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
            Welcome{" "}
            <Avatar
              display={{ base: "inherit", md: "none" }}
              ml={"auto"}
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
        </VStack>
        <Image
          display={{ base: "none", md: "inherit" }}
          height={"260px"}
          objectFit={"cover"}
          borderRadius={10}
          src={robert}
        ></Image>
      </CardBody>
    </Card>
  </HStack>
);

export default Welcome;
