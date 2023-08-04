import { Button, Heading, VStack, Text } from "@chakra-ui/react";

const JoinTheTeam = () => (
  <VStack mt={5} mb={5}>
    <VStack shadow={"xl"} bg={"red.200"} padding={5} borderRadius={"2xl"}>
      <Heading>Join The Team</Heading>
      <Text textAlign={"center"}>
        We are always looking for new people <br /> to join our team.
      </Text>
      <Button colorScheme={"red"}>Join</Button>
    </VStack>
  </VStack>
);

export default JoinTheTeam;
