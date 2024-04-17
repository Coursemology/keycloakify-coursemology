import { lazy, Suspense } from "react";

import Providers from "./lib/components/wrappers/Providers";
import { kcContext as kcLoginThemeContext } from "./login/kcContext";

const KcLoginThemeApp = lazy(() => import("./login/KcApp"));

const App = (): JSX.Element => {
  return (
    <Suspense>
      {(() => {
        if (kcLoginThemeContext !== undefined) {
          return <KcLoginThemeApp kcContext={kcLoginThemeContext} />;
        }

        throw new Error(
          "This app is a Keycloak theme" +
            "It isn't meant to be deployed outside of Keycloak",
        );
      })()}
    </Suspense>
  );
};

const AppWithProviders = (): JSX.Element => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};

export default AppWithProviders;
