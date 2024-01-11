import { Button, Heading, VStack, Text, Card, Divider } from "@chakra-ui/react";

const JoinTheTeam = () => (
  <VStack mt={5} mb={5}>
    <Card variant={"outline"} shadow={"xl"} padding={5} borderRadius={"2xl"}>
      <Heading textAlign={"center"}>Join The Team</Heading>
      <Divider mb={3}></Divider>
      <Text textAlign={"center"}>
        We are always looking for new people <br /> to join our team.
      </Text>
      <Button
        isDisabled={true}
        mt={4}
        ms="auto"
        me="auto"
        size={"md"}
        width="fit-content"
        colorScheme="red"
      >
        Coming Soon
      </Button>
    </Card>
  </VStack>
);

export default JoinTheTeam;
