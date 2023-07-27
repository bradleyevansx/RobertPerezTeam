import { ArrowDownIcon } from "@chakra-ui/icons";
import { IconButton, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import video from "../assets/photos/tampa-video.mp4";

const CenterSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Try to autoplay the video once the component has mounted
    tryAutoPlayVideo();
  }, []);

  const tryAutoPlayVideo = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      // Modern browsers support the 'play' method that returns a promise
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
          })
          .catch((error) => {
            // Autoplay was prevented. You can handle the error here.
            console.log("Autoplay prevented:", error);
          });
      }
    }
  };
  return (
    <div
      style={{
        position: "relative",
        height: "300px",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src={video}
        autoPlay
        loop
        style={{ minHeight: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <VStack>
          <Text
            whiteSpace={"nowrap"}
            letterSpacing={"-2px"}
            textAlign={"center"}
            fontSize={{ base: "4xl", md: "5xl" }}
          >
            Premier Tampa Bay<br></br> Real Estate
          </Text>
          <Text
            letterSpacing={"2px"}
            marginTop={"-10px"}
            fontFamily={"serif"}
            as="i"
            textAlign={"center"}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            Meet our team
          </Text>
          <IconButton
            isRound={true}
            colorScheme="whiteAlpha"
            aria-label="Down"
            fontSize="20px"
            icon={<ArrowDownIcon />}
          />
        </VStack>
      </div>
    </div>
  );
};

export default CenterSection;
