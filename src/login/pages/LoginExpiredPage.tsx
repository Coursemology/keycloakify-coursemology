import { Text } from "@chakra-ui/react";
import type { PageProps } from "keycloakify/login/pages/PageProps";

import Link from "src/lib/components/core/Link";

import Widget from "../components/Widget";
import type { I18n } from "../i18n";
import type { KcContext } from "../kcContext";

const LoginPageExpired = (
  props: PageProps<
    Extract<KcContext, { pageId: "login-page-expired.ftl" }>,
    I18n
  >,
) => {
  const { kcContext, i18n, doUseDefaultCss, Template } = props;

  const { msg } = i18n;

  return (
    <Template
      kcContext={kcContext}
      headerNode={msg("pageExpiredTitle")}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
    >
      <Widget.Body>
        <span className="flex space-x-2">
          <Text color="text.secondary">{msg("pageExpiredMsg1")}</Text>

          <Link
            textDecoration="underline"
            color="blue.500"
            url={kcContext.url.loginRestartFlowUrl}
          >
            <Text>{msg("doClickHere")}</Text>
          </Link>
        </span>

        <span className="flex space-x-2">
          <Text color="text.secondary">{msg("pageExpiredMsg2")}</Text>

          <Link
            textDecoration="underline"
            color="blue.500"
            url={kcContext.url.loginAction}
          >
            <Text>{msg("doClickHere")}</Text>
          </Link>
        </span>
      </Widget.Body>
    </Template>
  );
};

export default LoginPageExpired;
