import {
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import robert from "../assets/photos/Robert.jpg";
import tonya from "../assets/photos/Tonya.jpg";

const AboutUs = () => {
  return (
    <>
      <VStack width={"100vw"} gap={2}>
        <HStack width={"100%"} padding={5}>
          <Card maxW={"xl"} maxH={"md"}>
            <CardBody borderRadius={10}>
              <Heading textAlign={"center"} mb={1}>
                Robert Perez
              </Heading>
              <Divider mb={3} />
              <HStack>
                <Image
                  boxSize={150}
                  objectFit={"cover"}
                  borderRadius={10}
                  src={robert}
                ></Image>
                <Text ml={2} height={"300px"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto quaerat mollitia, nihil, dolores modi quidem labore
                  aperiam porro adipisci ducimus ratione facilis iure
                  perspiciatis. Delectus reprehenderit modi officia. Sint,
                  doloremque. Optio maiores asperiores dicta, aperiam officiis
                  dignissimos soluta doloremque itaque dolorum id qui eos
                  libero? Unde dolore modi repellendus labore veritatis quam,
                  pariatur sunt molestias, omnis doloribus dolores harum nemo.
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </HStack>
        <HStack width={"100%"} padding={5}>
          <Card maxW={"xl"} maxH={"md"}>
            <CardBody borderRadius={10}>
              <Heading textAlign={"center"} mb={1}>
                Tonya Coglianese
              </Heading>
              <Divider mb={3} />
              <HStack>
                <Image borderRadius={10} height={"300px"} src={tonya}></Image>
                <Text ml={2} height={"300px"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto quaerat mollitia, nihil, dolores modi quidem labore
                  aperiam porro adipisci ducimus ratione facilis iure
                  perspiciatis. Delectus reprehenderit modi officia. Sint,
                  doloremque. Optio maiores asperiores dicta, aperiam officiis
                  dignissimos soluta doloremque itaque dolorum id qui eos
                  libero? Unde dolore modi repellendus labore veritatis quam,
                  pariatur sunt molestias, omnis doloribus dolores harum nemo.
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </HStack>
      </VStack>
    </>
  );
};

export default AboutUs;
