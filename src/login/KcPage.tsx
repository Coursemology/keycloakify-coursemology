import { lazy, Suspense } from "react";
import type { ClassKey } from "keycloakify/login";
import DefaultPage from "keycloakify/login/DefaultPage";

import { useI18n } from "./i18n";
import type { KcContext } from "./KcContext";
import Template from "./Template";
import "./KcPage.css";

const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const InfoPage = lazy(() => import("./pages/InfoPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const LoginPageExpired = lazy(() => import("./pages/LoginExpiredPage"));
const LoginVerifyEmail = lazy(() => import("./pages/LoginVerifyEmailPage"));
const LogoutConfirmPage = lazy(() => import("./pages/LogoutConfirmPage"));
const UserProfileFormFields = lazy(
  () => import("keycloakify/login/UserProfileFormFields"),
);

// This is like adding classes to theme.properties
// https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
const classes = {
  // NOTE: The classes are defined in ./KcApp.css
  kcHtmlClass: "my-root-class",
  kcHeaderWrapperClass: "my-color my-font",
} satisfies { [key in ClassKey]?: string };

export const KcPage = (props: { kcContext: KcContext }) => {
  const { kcContext } = props;
  const { i18n } = useI18n({ kcContext });

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
              <DefaultPage
                kcContext={kcContext}
                i18n={i18n}
                Template={Template}
                classes={classes}
                doUseDefaultCss={true}
                UserProfileFormFields={UserProfileFormFields}
                doMakeUserConfirmPassword={true}
              />
            );
        }
      })()}
    </Suspense>
  );
};

export default KcPage;
