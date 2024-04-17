import { Text } from "@chakra-ui/react";
import type { PageProps } from "keycloakify/login/pages/PageProps";

import Link from "src/lib/components/core/Link";
import { useCoursemologyUrls } from "src/lib/components/hooks/useCoursemologyUrls";

import Widget from "../components/Widget";
import type { I18n } from "../i18n";
import type { KcContext } from "../kcContext";

const LoginVerifyEmailPage = (
  props: PageProps<
    Extract<KcContext, { pageId: "login-verify-email.ftl" }>,
    I18n
  >,
) => {
  const { kcContext, i18n, doUseDefaultCss, Template } = props;
  const { resendConfirmationEmailUrl } = useCoursemologyUrls();

  const { msg } = i18n;

  return (
    <Template
      kcContext={kcContext}
      headerNode={msg("emailVerifyTitle")}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
    >
      <Widget.Body>
        <Text className="mb-4" color="text.secondary">
          {msg("emailNotVerified")}
        </Text>
      </Widget.Body>
      <Widget.Foot className="flex flex-col">
        <div className="flex flex-col items-start space-y-3">
          <Link
            textDecoration="underline"
            color="blue.500"
            url={resendConfirmationEmailUrl}
          >
            <Text>{msg("resendConfirmationEmail")}</Text>
          </Link>
        </div>
      </Widget.Foot>
    </Template>
  );
};

export default LoginVerifyEmailPage;
