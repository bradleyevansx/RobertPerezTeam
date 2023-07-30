import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <HStack justifyContent={"center"}>
      <VStack
        width={{ base: "350px", sm: "540px", md: "740px", lg: "940px" }}
        padding={"10px"}
        marginTop={"10px"}
      >
        <Text textAlign={"center"} as="i" fontSize={"xl"} color="grey">
          Let us know how our dedicated team of Tampa Bay real estate agents can
          help you today
        </Text>
        <HStack mb={"10px"} mt={"5px"}>
          <Button
            leftIcon={<EmailIcon />}
            variant="outline"
            size={{ base: "md", md: "lg" }}
            colorScheme={"red"}
          >
            Email
          </Button>
          <Button
            leftIcon={<PhoneIcon />}
            size={{ base: "md", md: "lg" }}
            colorScheme={"red"}
          >
            Call Us
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ContactSection;
