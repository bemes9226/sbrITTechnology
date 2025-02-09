import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./Toast/ToastProvider";
import { GlobalStyleProvider } from "./context/accessibility/AccessibilityProvider";
import { GlobalStyles } from "./context/accessibility/GlobalStyles";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider>
      <GlobalStyleProvider>
        <GlobalStyles />

        <App name={""} />
        {/* <AccessibilityControls /> */}
      </GlobalStyleProvider>
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
