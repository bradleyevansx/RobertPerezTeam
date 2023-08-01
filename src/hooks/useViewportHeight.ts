import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

const useViewportHeight = () => {
  const [availableHeight, setAvailableHeight] = useState(0);
  const { height: windowHeight } = useWindowSize();

  useEffect(() => {
    const adjustForAddressBar = () => {
      const addressBarHeight = windowHeight - window.innerHeight;
      setAvailableHeight(window.innerHeight - addressBarHeight);
    };

    adjustForAddressBar();

    window.addEventListener("resize", adjustForAddressBar);

    return () => {
      window.removeEventListener("resize", adjustForAddressBar);
    };
  }, [windowHeight]);

  return availableHeight;
};

export default useViewportHeight;
