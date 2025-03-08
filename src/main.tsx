import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v6";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from "./apps/index.tsx";
import "./globals.css";
import "./lib/i18n";
import i18n from "./lib/i18n";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <App />
            <Toaster />
          </I18nextProvider>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  </StrictMode>
);
