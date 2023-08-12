import { Divider, Heading, VStack } from "@chakra-ui/react";
import { LocationTagGroup } from "./LocationTagGroup";

const LocationsWeServe = () => {
  return (
    <VStack
      shadow={"lg"}
      width={{ base: "359px", md: "fit-content" }}
      borderRadius={"lg"}
      padding={3}
      background={"blackAlpha.100"}
      justify={"center"}
    >
      <Heading color={"#333"}>Locations We Serve</Heading>
      <Divider mb={4}></Divider>
      <LocationTagGroup />
    </VStack>
  );
};

export default LocationsWeServe;
