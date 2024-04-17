import type { DeepPartial } from "keycloakify/tools/DeepPartial";

import Providers from "src/lib/components/wrappers/Providers";

import KcApp from "./KcApp";
import { getKcContext, type KcContext } from "./kcContext";

export function createPageStory<PageId extends KcContext["pageId"]>(params: {
  pageId: PageId;
}) {
  const { pageId } = params;

  function PageStory(params: {
    kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
  }) {
    const { kcContext } = getKcContext({
      mockPageId: pageId,
      storyPartialKcContext: params.kcContext,
    });

    return (
      <>
        {/* If you import custom fonts in your index.html you have to import them in storybook as well*/}
        <link
          rel="stylesheet"
          type="text/css"
          href={`${import.meta.env.BASE_URL}fonts/WorkSans/font.css`}
        />
        <Providers>
          <KcApp kcContext={kcContext} />
        </Providers>
      </>
    );
  }

  return { PageStory };
}
