import { ArrowDownIcon } from "@chakra-ui/icons";
import { IconButton, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import video from "../assets/photos/tampa-video.mp4";

const CenterSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    tryAutoPlayVideo();
  }, []);

  const tryAutoPlayVideo = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
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
        muted
        playsInline
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
            textShadow={"0 0 10px black"}
            whiteSpace={"nowrap"}
            letterSpacing={"-2px"}
            textAlign={"center"}
            fontSize={{ base: "4xl", md: "5xl" }}
          >
            Premier Tampa Bay<br></br> Real Estate
          </Text>
          <Text
            textShadow={"0 0 5px black"}
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
