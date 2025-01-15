import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
/*
import { getKcContextMock } from "./login/KcPageStory";

if (import.meta.env.DEV) {
  window.kcContext = getKcContextMock({
    pageId: "login.ftl",
    overrides: {},
  });
}
*/

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
