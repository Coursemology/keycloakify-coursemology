import { FC, ReactNode } from "react";

import ThemeProvider from "./ThemeProvider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = (props) => (
  <ThemeProvider>{props.children}</ThemeProvider>
);

export default Providers;
