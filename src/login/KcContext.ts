/* eslint-disable @typescript-eslint/ban-types */
import { ExtendKcContext } from "keycloakify/login";
import { KcEnvName, ThemeName } from "src/kc.gen";

export type KcContextExtension = {
  themeName: ThemeName;
  properties: Record<KcEnvName, string> & {};
};

export type KcContextExtensionPerPage = {
  "login.ftl": {};
};

export type KcContext = ExtendKcContext<
  KcContextExtension,
  KcContextExtensionPerPage
>;
