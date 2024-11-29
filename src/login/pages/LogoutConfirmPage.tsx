import { useRef } from "react";
import { Button, Text } from "@chakra-ui/react";
import type { PageProps } from "keycloakify/login/pages/PageProps";

import Link from "src/lib/components/core/Link";
import { useCoursemologyUrls } from "src/lib/components/hooks/useCoursemologyUrls";

import Widget from "../components/Widget";
import type { I18n } from "../i18n";
import type { KcContext } from "../kcContext";

const LogoutConfirmPage = (
  props: PageProps<Extract<KcContext, { pageId: "logout-confirm.ftl" }>, I18n>,
) => {
  const { kcContext, i18n, doUseDefaultCss, Template } = props;
  const { client, url, logoutConfirm } = kcContext;
  const { homeUrl } = useCoursemologyUrls(client.baseUrl);
  const formRef = useRef<HTMLFormElement>(null);

  const { msg } = i18n;

  return (
    <Template
      kcContext={kcContext}
      headerNode={msg("logoutConfirmTitle")}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
    >
      <Widget.Body>
        <Text>{msg("logoutConfirmHeader")}</Text>
        <form
          ref={formRef}
          className="space-y-3"
          action={url.logoutConfirmAction}
          method="post"
        >
          <input
            type="hidden"
            id="id-hidden-input"
            name="session_code"
            value={logoutConfirm.code}
          />
          <Button
            name="confirmLogout"
            id="kc-logout"
            colorScheme="primary"
            size="lg"
            width="100%"
            type="submit"
            autoFocus
          >
            {msg("doLogout")}
          </Button>
        </form>
      </Widget.Body>
      <Widget.Foot>
        <Link textDecoration="underline" color="blue.500" url={homeUrl}>
          <Text>{msg("backToApplication")}</Text>
        </Link>
      </Widget.Foot>
    </Template>
  );
};

export default LogoutConfirmPage;
