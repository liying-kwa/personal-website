import { useEffect } from "react";
import Vara from "vara";

interface VaraTextProps {
  text: string;
  fontSize?: number;
}

const VaraText = (props: VaraTextProps) => {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: props.text,
          fontSize: props.fontSize ?? 46,
          strokeWidth: 2.5,
          x: 5,
          y: 5,
          color: "black"
        }
      ]
    );
  }, []);
  
  return <div id="vara-container"></div>;
}

export default VaraText;