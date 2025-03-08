import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from "./apps/index.tsx";
import "./globals.css";
import "./lib/i18n";
import i18n from "./lib/i18n";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
        <Toaster />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
