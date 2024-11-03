import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { TotalUsageContext } from "./context/totalUageContext";
import React from "react";
import { Toaster } from "sonner";

const appName = import.meta.env.VITE_APP_NAME || "AIdeaForge";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [usage, setUsage] = React.useState<any>(0);
  return (
    <TotalUsageContext.Provider value={{ usage, setUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx")
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <AppWrapper>
        <App {...props} />
        <Toaster />
      </AppWrapper>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
