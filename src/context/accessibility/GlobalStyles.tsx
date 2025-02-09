import { useEffect } from "react";
import {
  getTextAlign,
  getThemeColor,
  useGlobalStyles,
} from "./AccessibilityProvider";

export const GlobalStyles = () => {
  const { globalStyles } = useGlobalStyles();

  useEffect(() => {
    document.body.style.fontSize = globalStyles.fontSize;
    document.body.style.letterSpacing = globalStyles.letterSpacing;
    document.body.style.wordSpacing = globalStyles.wordSpacing;
    document.body.style.backgroundColor =
      globalStyles.contrast === "light" ? "#ffffff" : "#000000";
    document.body.style.color =
      globalStyles.contrast === "light" ? "#000000" : "#ffffff";
    const style = document.createElement("style");
    style.innerHTML = `
            ${
              globalStyles.highligtedLinks
                ? "a {border-bottom: 2px solid yellow; }"
                : ""
            }
           ${
             globalStyles.theme
               ? `body {
                background-color: ${getThemeColor(globalStyles.theme)};
            }`
               : ""
           } 
            ${
              globalStyles.theme
                ? `body {
                text-align: ${getTextAlign(globalStyles.textAlign)};
            }`
                : ""
            } 
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [globalStyles]);

  return null;
};
