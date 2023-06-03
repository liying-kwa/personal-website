import { useEffect, useState } from "react";
import Vara from "vara";

interface VaraTextProps {
  text: string;
  fontSize?: number;
  theme: string;
}

const VaraText = (props: VaraTextProps) => {
  const theme = props.theme;
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: props.text,
          x: 5,
          y: 5,
          fromCurrentPosition: { y: false }
        }
      ],
      {
        fontSize: props.fontSize ?? 46,
        strokeWidth: 2.5,
        color: props.theme === 'light' ? 'black' : 'white'
      }
    );
  }, []);

  return <div id="vara-container" className="bg-white dark:bg-black text-black dark:text-white"></div>;
}

export default VaraText;