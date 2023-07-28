import { Button, HStack, Text, VStack } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <HStack justifyContent={"center"}>
      <VStack
        width={{ base: "350px", md: "740px", lg: "940px" }}
        padding={"10px"}
        marginTop={"10px"}
      >
        <Text textAlign={"center"} as="i" fontSize={"xl"} color="grey">
          Let us know how our dedicated team of Tampa Bay real estate agents can
          help you today
        </Text>
        <Button
          marginTop={"5px"}
          size={{ base: "md", md: "lg" }}
          colorScheme={"red"}
        >
          Contact
        </Button>
      </VStack>
    </HStack>
  );
};

export default ContactSection;
