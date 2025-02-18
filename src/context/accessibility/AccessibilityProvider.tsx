import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Create context for global styles
const GlobalStyleContext = createContext({
  globalStyles: {
    fontSize: "16px",
    letterSpacing: "0px",
    wordSpacing: "0px",
    contrast: "light",
    fontSizeProgress: 0,
    letterSpacingProgress: 0,
    wordSpacingProgress: 0,
    contrastProgress: 0,
    highligtedLinksProgress: 0,
    highligtedLinks: false,
    themeProgress: 0,
    theme: "",
    textAlign: "",
    textAlignProgress: 0,
  },
  updateStyles: (key: string, progress: number) => {},
});

export const GlobalStyleProvider = ({ children }: { children: ReactNode }) => {
  const [globalStyles, setGlobalStyles] = useState({
    fontSize: localStorage.getItem("fontSize") || "16px", // Default size
    letterSpacing: "0px",
    wordSpacing: "0px",
    contrast: "light", // Default contrast
    fontSizeProgress: Number(localStorage.getItem("fontSizeProgress")) || 0,
    letterSpacingProgress: 0,
    wordSpacingProgress: 0,
    contrastProgress: 0,
    highligtedLinksProgress: 0,
    highligtedLinks: JSON.parse(
      localStorage.getItem("highlightLinks") || "false"
    ),
    themeProgress: Number(localStorage.getItem("themeProgress")) || 0,
    theme: localStorage.getItem("theme") || "", // Default theme
    textAlign: localStorage.getItem("theme") || "",
    textAlignProgress: Number(localStorage.getItem("textAlignProgress")) || 0,
  });

  const updateStyles = (key: string, progress: number) => {
    setGlobalStyles((prev) => {
      const newProgress = progress >= 4 ? 0 : progress + 1; // Reset after 4 clicks
      const newState = { ...prev, [`${key}Progress`]: newProgress };

      if (key === "fontSize") {
        newState.fontSize = `${16 + newProgress * 2}px`; // Increase font size dynamically
        localStorage.setItem("fontSize", newState.fontSize);
        localStorage.setItem("fontSizeProgress", newProgress.toString());
      }
      if (key === "letterSpacing") {
        newState.letterSpacing = `${newProgress * 0.5}px`; // Increase letter spacing
      }
      if (key === "wordSpacing") {
        newState.wordSpacing = `${newProgress}px`; // Increase word spacing
      }
      if (key === "contrast") {
        newState.contrast = newProgress % 2 === 0 ? "light" : "dark"; // Toggle between light and dark mode
      }
      if (key === "textAlign") {
        newState.textAlign = `align${newProgress}`; // Change align color
        localStorage.setItem("theme", newState.textAlign);
        localStorage.setItem("textAlignProgress", newProgress.toString());
      }
      if (key === "theme") {
        newState.theme = `theme${newProgress}`; // Change theme color
        localStorage.setItem("theme", newState.theme);
        localStorage.setItem("themeProgress", newProgress.toString());
      }
      if (key === "highligtedLinks") {
        const newHighlightedLinks = !prev.highligtedLinks;
        localStorage.setItem(
          "highlightLinks",
          JSON.stringify(newHighlightedLinks)
        ); // Save to localStorage
        return { ...prev, highligtedLinks: newHighlightedLinks };
      }

      return newState;
    });
  };

  return (
    <GlobalStyleContext.Provider value={{ globalStyles, updateStyles }}>
      {children}
    </GlobalStyleContext.Provider>
  );
};

export const useGlobalStyles = () => useContext(GlobalStyleContext);
export const getThemeColor = (theme: string) => {
  switch (theme) {
    case "theme1":
      return "#ffcc00 !important"; // Yellow
    case "theme2":
      return "#ff6666 !important"; // Red
    case "theme3":
      return "#fff !important"; // white
    case "theme4":
      return "#fff !important"; // Blue
    default:
      return ""; // Default white
  }
};
export const getTextAlign = (align: string) => {
  switch (align) {
    case "align1":
      return "left !important"; // Yellow
    case "align2":
      return "right !important"; // Red
    case "align3":
      return "center !important"; // white
    case "align4":
      return "justify !important"; // Blue
    default:
      return ""; // Default white
  }
};
