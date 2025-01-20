import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { DeepPartial } from "keycloakify/tools/DeepPartial";

import Providers from "src/lib/components/wrappers/Providers";

import { kcEnvDefaults, themeNames } from "../kc.gen";

import type { KcContext } from "./KcContext";
import type {
  KcContextExtension,
  KcContextExtensionPerPage,
} from "./KcContext";
import KcPage from "./KcPage";

const kcContextExtension: KcContextExtension = {
  themeName: themeNames[0],
  properties: {
    ...kcEnvDefaults,
  },
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {
  "login.ftl": {
    locale: {
      currentLanguageTag: "en",
    },
  },
};

export const { getKcContextMock } = createGetKcContextMock({
  kcContextExtension,
  kcContextExtensionPerPage,
  overrides: {},
  overridesPerPage: {
    "login.ftl": {
      locale: {
        currentLanguageTag: "en",
      },
    },
  },
});

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
  pageId: PageId;
}) {
  const { pageId } = params;

  function KcPageStory(props: {
    kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
  }) {
    const { kcContext: overrides } = props;

    const kcContextMock = getKcContextMock({
      pageId,
      overrides,
    });

    return (
      <Providers>
        <KcPage kcContext={kcContextMock} />;
      </Providers>
    );
  }

  return { KcPageStory };
}
