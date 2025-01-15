import Providers from "./lib/components/wrappers/Providers";
import { KcPage } from "./kc.gen";

const App = (): JSX.Element => {
  if (!window.kcContext) {
    throw new Error(
      "This app is a Keycloak theme" +
        "It isn't meant to be deployed outside of Keycloak",
    );
  }

  return <KcPage kcContext={window.kcContext} />;
};

const AppWithProviders = (): JSX.Element => {
  return (
    <Providers>
      <App />
    </Providers>
  );
};

export default AppWithProviders;
