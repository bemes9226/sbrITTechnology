import React from "react";
import { useToast } from "./Toast/useToast";
import { DynamicTextareas } from "./reacthookForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header } from "./pages/Header";
import { Layout } from "./layout/Layout";
import Home from "./pages/Home/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { useGlobalStyles } from "./context/accessibility/AccessibilityProvider";
import DynamicCard from "./context/accessibility/DynamicCard";
import Notification from "./components/notification/Notification";
interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  const toast = useToast();
  const { globalStyles, updateStyles } = useGlobalStyles();
  return (
    <>
      <h1 className="bg-aegold-600">Hello, {name}!</h1>
      <Notification />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card for Font Size */}
        <DynamicCard
          label={`fontSize :${globalStyles.fontSize}`}
          property="fontSize"
          activeProgress={globalStyles.fontSizeProgress}
          onClick={updateStyles}
        />

        {/* Card for Letter Spacing */}
        <DynamicCard
          label={`letterSpacing :${globalStyles.letterSpacing}`}
          property="letterSpacing"
          activeProgress={globalStyles.letterSpacingProgress}
          onClick={updateStyles}
        />

        {/* Card for Word Spacing */}
        <DynamicCard
          label={`wordSpacing :${globalStyles.wordSpacing}`}
          property="wordSpacing"
          activeProgress={globalStyles.wordSpacingProgress}
          onClick={updateStyles}
        />

        {/* Card for Contrast */}
        <DynamicCard
          label={`contrast :${globalStyles.contrast}`}
          property="contrast"
          activeProgress={globalStyles.contrastProgress}
          onClick={updateStyles}
        />
        <DynamicCard
          label={`highligtedLinks :${globalStyles.highligtedLinks}`}
          property="highligtedLinks"
          activeProgress={globalStyles.highligtedLinksProgress}
          onClick={updateStyles}
        />
        <DynamicCard
          label={`Theme Color :${globalStyles.theme}`}
          property="theme"
          activeProgress={globalStyles.themeProgress}
          onClick={updateStyles}
        />
        <DynamicCard
          label={`text-align :${globalStyles.textAlign}`}
          property="textAlign"
          activeProgress={globalStyles.textAlignProgress}
          onClick={updateStyles}
        />
      </div>
      {/* <button
        className="aegov-btn btn-primary"
        onClick={() => toast.addToast("Hello, World!", "error")}
      >
        Show Toast
      </button> */}
      <Router>
        <Routes>
          {/* Shared Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Default route */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
