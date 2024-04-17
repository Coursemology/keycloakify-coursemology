// Original file: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { type TemplateProps as KeycloakTemplateProps } from "keycloakify/login/TemplateProps";

import AlertBox from "src/lib/components/core/AlertBox";
import Footer from "src/lib/components/core/layouts/Footer";
import { useCoursemologyUrls } from "src/lib/components/hooks/useCoursemologyUrls";
import BrandingHead from "src/lib/components/navigation/BrandingHead";

import LocaleDropdown from "./components/LocaleDropdown";
import Widget from "./components/Widget";
import type { I18n } from "./i18n";
import type { KcContext } from "./kcContext";

const Template = (props: KeycloakTemplateProps<KcContext, I18n>) => {
  const {
    displayMessage = true,
    headerNode,
    kcContext,
    i18n,
    children,
  } = props;

  const { msg } = i18n;

  const { realm, locale, message, isAppInitiatedAction } = kcContext;
  const { homeUrl } = useCoursemologyUrls();

  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex items-center justify-between px-2">
        <BrandingHead
          textNode={msg("loginTitleHtml", realm.displayNameHtml)}
          brandUrl={homeUrl}
        />
        {realm.internationalizationEnabled && (
          <LocaleDropdown locale={locale} i18n={i18n} />
        )}
      </header>

      <div className="relative h-full">
        <div className="flex min-h-[calc(100vh_-_4.5rem)] items-center justify-center max-sm:py-[5rem] px-4">
          <Widget className="space-y-3" titleNode={headerNode}>
            {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
            {displayMessage &&
              message &&
              (message.type !== "warning" || !isAppInitiatedAction) && (
                <AlertBox status={message.type}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: message.summary,
                    }}
                  />
                </AlertBox>
              )}
            {children}
          </Widget>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Template;
