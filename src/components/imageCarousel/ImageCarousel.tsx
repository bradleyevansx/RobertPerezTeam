import { HStack, Image } from "@chakra-ui/react";
import house from "../../assets/photos/House1.webp";
import pool from "../../assets/photos/Pool.jpg";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  return (
    <HStack margin={"0 auto"} width={"90vw"} borderRadius="xl">
      <div className="carousel">
        <Image
          className="card"
          objectFit={"cover"}
          borderRadius={"xl"}
          src={pool}
        ></Image>
        <Image
          className="card"
          objectFit={"cover"}
          borderRadius={"xl"}
          src={house}
        ></Image>
        <Image
          className="card"
          objectFit={"cover"}
          borderRadius={"xl"}
          src={house}
        ></Image>
        <Image
          className="card"
          objectFit={"cover"}
          borderRadius={"xl"}
          src={house}
        ></Image>
        <Image
          className="card"
          objectFit={"cover"}
          borderRadius={"xl"}
          src={house}
        ></Image>
        <Image
          className="card"
          objectFit={"cover"}
          borderRadius={"xl"}
          src={house}
        ></Image>
      </div>
    </HStack>
  );
};

export default ImageCarousel;
