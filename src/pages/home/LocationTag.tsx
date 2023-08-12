import { HStack, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  location: string;
}

const LocationTag = ({ location }: Props) => (
  <HStack>
    <FaMapMarkerAlt color={"#E53E3E"} size={"20px"}></FaMapMarkerAlt>
    <Text whiteSpace={"nowrap"} color={"#444"} fontWeight={"black"}>
      {location}
    </Text>
  </HStack>
);

export default LocationTag;
