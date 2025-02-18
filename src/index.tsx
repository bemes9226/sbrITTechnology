import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./Toast/ToastProvider";
import { GlobalStyleProvider } from "./context/accessibility/AccessibilityProvider";
import { GlobalStyles } from "./context/accessibility/GlobalStyles";
//import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import likeReducer from "./store/likeReducer";
import subscribeReducer from "./store/subscribeReducer";

const store = configureStore({
  reducer: {
    likes: likeReducer,
    subscriber: subscribeReducer,
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider>
      <GlobalStyleProvider>
        <GlobalStyles />
        <Provider store={store}>
          <App />
        </Provider>
        {/* <AccessibilityControls /> */}
      </GlobalStyleProvider>
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
