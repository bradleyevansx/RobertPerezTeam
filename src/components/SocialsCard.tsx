import { HStack, IconButton, Link } from "@chakra-ui/react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
const SocialsCard = () => (
  <HStack ms={"auto"} padding={2} borderRadius="lg" bg={"gray.300"}>
    <Link href="https://www.instagram.com/robertperezteam/" target={"_blank"}>
      <IconButton
        color={"#333"}
        aria-label="Instagram"
        icon={<BsInstagram size={"20px"}></BsInstagram>}
      ></IconButton>
    </Link>
    <Link
      href="https://www.facebook.com/RobertPerezTeam?mibextid=b06tZ0"
      target={"_blank"}
    >
      <IconButton
        color={"#333"}
        aria-label="Instagram"
        icon={<BsFacebook size={"20px"}></BsFacebook>}
      ></IconButton>
    </Link>
  </HStack>
);

export default SocialsCard;
