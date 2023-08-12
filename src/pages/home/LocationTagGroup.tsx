import { HStack } from "@chakra-ui/react";
import LocationTag from "./LocationTag";
const locations = [
  "Hillsborough County",
  "Polk County",
  "Pasco County",
  "Sarasota County",
  "Pinellas County",
  "Hernando County",
  "Manatee County",
];

export function LocationTagGroup({}) {
  return (
    <HStack
      justifyContent={"center"}
      width={{ base: "335px", md: "519px" }}
      display="flex"
      flexWrap={"wrap"}
    >
      {locations.map((location) => (
        <LocationTag location={location}></LocationTag>
      ))}
    </HStack>
  );
}
