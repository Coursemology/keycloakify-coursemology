import { type FormEventHandler, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useConstCallback } from "keycloakify/tools/useConstCallback";

import PasswordTextField from "src/lib/components/core/Field/PasswordField";
import Link from "src/lib/components/core/Link";
import { useCoursemologyUrls } from "src/lib/components/hooks/useCoursemologyUrls";

import Widget from "../components/Widget";
import type { I18n } from "../i18n";
import type { KcContext } from "../kcContext";

const LoginPage = (
  props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>,
) => {
  const { kcContext, i18n, doUseDefaultCss, Template } = props;

  const { realm, url, usernameHidden, login, auth } = kcContext;
  const { forgotPasswordUrl, signUpUrl, resendConfirmationEmailUrl } =
    useCoursemologyUrls();

  const { msg, msgStr } = i18n;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useConstCallback<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formElement = e.target as HTMLFormElement;

    //NOTE: Even if we login with email Keycloak expect username and password in
    //the POST request.
    formElement
      .querySelector("input[name='email']")
      ?.setAttribute("name", "username");
    formElement.submit();
  });

  return (
    <Template
      kcContext={kcContext}
      headerNode={msg("doLogIn")}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
    >
      <Widget.Body>
        <div id="kc-form">
          <div id="kc-form-wrapper">
            {realm.password && (
              <form
                className="space-y-3"
                id="kc-form-login"
                onSubmit={onSubmit}
                action={url.loginAction}
                method="post"
              >
                {!usernameHidden &&
                  (() => {
                    const label = !realm.loginWithEmailAllowed
                      ? "username"
                      : realm.registrationEmailAsUsername
                        ? "email"
                        : "usernameOrEmail";

                    const autoCompleteHelper: typeof label =
                      label === "usernameOrEmail" ? "username" : label;

                    return (
                      <Input
                        //NOTE: This is used by Google Chrome auto fill so we use it to tell
                        //the browser how to pre fill the form but before submit we put it back
                        //to username because it is what keycloak expects.
                        name={autoCompleteHelper}
                        defaultValue={login.username ?? ""}
                        type="text"
                        autoFocus={true}
                        autoComplete="email"
                        placeholder={msgStr(label)}
                        size="lg"
                      />
                    );
                  })()}

                <PasswordTextField
                  id="password"
                  name="password"
                  placeholder={msgStr("password")}
                  autoComplete="current-password"
                  size="lg"
                />

                {realm.rememberMe && !usernameHidden && (
                  <label className="cursor-pointer flex space-x-2">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      {...(login.rememberMe === "on"
                        ? {
                            checked: true,
                          }
                        : {})}
                    />
                    <Text>{msg("rememberMe")}</Text>
                  </label>
                )}

                <input
                  type="hidden"
                  id="id-hidden-input"
                  name="credentialId"
                  {...(auth?.selectedCredential !== undefined
                    ? {
                        value: auth.selectedCredential,
                      }
                    : {})}
                />
                <Button
                  name="login"
                  id="kc-login"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  colorScheme="primary"
                  size="lg"
                  width="100%"
                  type="submit"
                >
                  {msg("doLogIn")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Widget.Body>

      <Widget.Foot className="flex space-x-3">
        <Text color="text.secondary">{msg("dontYetHaveAnAccount")}</Text>

        <Link
          textDecoration="underline"
          color="blue.500"
          disabled={isSubmitting}
          url={signUpUrl}
        >
          <Text>{msg("doRegister")}</Text>
        </Link>
      </Widget.Foot>

      <Widget.Foot className="flex flex-col">
        <Text className="mb-4" color="text.secondary">
          {msg("troubleSigningIn")}
        </Text>

        <div className="flex flex-col items-start space-y-3">
          <Link
            textDecoration="underline"
            color="blue.500"
            disabled={isSubmitting}
            url={forgotPasswordUrl}
          >
            <Text>{msg("forgotPassword")}</Text>
          </Link>

          <Link
            textDecoration="underline"
            color="blue.500"
            disabled={isSubmitting}
            url={resendConfirmationEmailUrl}
          >
            <Text>{msg("resendConfirmationEmail")}</Text>
          </Link>
        </div>
      </Widget.Foot>
    </Template>
  );
};

export default LoginPage;
