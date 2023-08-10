import { HStack, Image } from "@chakra-ui/react";
import pool from "../../assets/photos/Pool.jpg";
import extHouse5 from "../../assets/photos/ExtHouse5.jpg";
import bathroom1 from "../../assets/photos/Bathroom1.jpg";
import extHouse3 from "../../assets/photos/ExtHouse3.jpg";
import pool2 from "../../assets/photos/Pool2.webp";
import livingRoom2 from "../../assets/photos/LivingRoom2.webp";
import kitchen4 from "../../assets/photos/Kitchen4.jpg";

import "./ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    pool,
    extHouse5,
    bathroom1,
    extHouse3,
    pool2,
    livingRoom2,
    kitchen4,
  ];

  return (
    <HStack margin={"0 auto"} width={"90vw"} borderRadius="xl">
      <div className="carousel">
        {images.map((photo) => (
          <Image
            shadow={"lg"}
            className="card"
            objectFit={"cover"}
            borderRadius={"xl"}
            src={photo}
          ></Image>
        ))}
      </div>
    </HStack>
  );
};

export default ImageCarousel;
