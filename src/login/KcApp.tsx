import { lazy, Suspense } from "react";
import Fallback, { type PageProps } from "keycloakify/login";
import DefaultTemplate from "keycloakify/login/Template";

import { useI18n } from "./i18n";
import type { KcContext } from "./kcContext";
import Template from "./Template";
import "./KcApp.css";

const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const InfoPage = lazy(() => import("./pages/InfoPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LoginPageExpired = lazy(() => import("./pages/LoginExpiredPage"));
const LoginVerifyEmail = lazy(() => import("./pages/LoginVerifyEmailPage"));
const LogoutConfirmPage = lazy(() => import("./pages/LogoutConfirmPage"));

// This is like adding classes to theme.properties
// https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
const classes = {
  // NOTE: The classes are defined in ./KcApp.css
  kcHtmlClass: "my-root-class",
  kcHeaderWrapperClass: "my-color my-font",
} satisfies PageProps["classes"];

export const KcApp = (props: { kcContext: KcContext }) => {
  const { kcContext } = props;
  const i18n = useI18n({ kcContext });

  if (i18n === null) {
    //NOTE: Text resources for the current language are still being downloaded, we can't display anything yet.
    //We could display a loading progress but it's usually a matter of milliseconds.
    return null;
  }

  /*
   * Examples assuming i18n.currentLanguageTag === "en":
   * i18n.msg("access-denied") === <span>Access denied</span>
   * i18n.msg("foo") === <span>foo in English</span>
   */

  return (
    <Suspense>
      {(() => {
        switch (kcContext.pageId) {
          case "login.ftl":
            return (
              <LoginPage
                {...{ kcContext, i18n }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          case "login-page-expired.ftl":
            return (
              <LoginPageExpired
                {...{ kcContext, i18n }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          case "login-verify-email.ftl":
            return (
              <LoginVerifyEmail
                {...{ kcContext, i18n }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          case "error.ftl":
            return (
              <ErrorPage
                {...{ kcContext, i18n }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          case "info.ftl":
            return (
              <InfoPage
                {...{ kcContext, i18n }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          case "logout-confirm.ftl":
            return (
              <LogoutConfirmPage
                {...{ kcContext, i18n }}
                Template={Template}
                doUseDefaultCss={true}
              />
            );
          default:
            return (
              <Fallback
                {...{ kcContext, i18n, classes }}
                Template={DefaultTemplate}
                doUseDefaultCss={true}
              />
            );
        }
      })()}
    </Suspense>
  );
};

export default KcApp;
