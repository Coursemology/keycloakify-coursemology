import { Text } from "@chakra-ui/react";
import type { PageProps } from "keycloakify/login/pages/PageProps";

import Link from "src/lib/components/core/Link";
import { useCoursemologyUrls } from "src/lib/components/hooks/useCoursemologyUrls";

import Widget from "../components/Widget";
import type { I18n } from "../i18n";
import type { KcContext } from "../kcContext";

const ErrorPage = (
  props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>,
) => {
  const { kcContext, i18n, doUseDefaultCss, Template } = props;
  const { homeUrl } = useCoursemologyUrls(kcContext.client?.baseUrl);
  const { msg } = i18n;

  return (
    <Template
      kcContext={kcContext}
      headerNode={msg("errorTitle")}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
    >
      <Widget.Foot>
        <Link textDecoration="underline" color="blue.500" url={homeUrl}>
          <Text>{msg("backToApplication")}</Text>
        </Link>
      </Widget.Foot>
    </Template>
  );
};

export default ErrorPage;
