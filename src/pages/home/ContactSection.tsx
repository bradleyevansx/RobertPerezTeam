import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, HStack, Text, VStack } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <HStack
      maxWidth={"1570px"}
      margin={"0 auto"}
      mt={{ base: 210, md: 0 }}
      mb={{ base: 0, lg: 50 }}
      justifyContent={{ base: "center", lg: "start" }}
    >
      <VStack
        width={{ base: "350px", sm: "460px", md: "740px", lg: "500px" }}
        padding={"10px"}
        marginTop={"10px"}
      >
        <Text textAlign={"center"} as="i" fontSize={"xl"} color="grey">
          Let us know how our dedicated team of Tampa Bay real estate agents can
          help you today!
        </Text>
        <HStack mb={"10px"} mt={"5px"}>
          <a href="mailto:robert@robertperezteam.com">
            <Button
              leftIcon={<EmailIcon />}
              variant="outline"
              size={{ base: "md", md: "lg" }}
              colorScheme={"red"}
            >
              Email
            </Button>
          </a>
          <a href="tel:8137502000">
            <Button
              leftIcon={<PhoneIcon />}
              size={{ base: "md", md: "lg" }}
              colorScheme={"red"}
            >
              Call Us
            </Button>
          </a>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ContactSection;
