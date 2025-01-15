import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { assert } from "keycloakify/tools/assert";

import type { I18n } from "../../i18n";
import type { KcContext } from "../../KcContext";

interface LocaleDropdownProps {
  locale: KcContext["locale"];
  i18n: I18n;
}

const LocaleDropdown = (props: LocaleDropdownProps): JSX.Element | null => {
  const { locale, i18n } = props;
  const {
    getChangeLocaleUrl,
    labelBySupportedLanguageTag,
    currentLanguageTag,
  } = i18n;

  return (assert(locale !== undefined), true) && locale.supported.length > 1 ? (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {labelBySupportedLanguageTag[currentLanguageTag]}
        </MenuButton>
        <MenuList>
          {locale.supported.map(({ languageTag }) => (
            <MenuItem
              as="a"
              href={getChangeLocaleUrl(languageTag)}
              key={languageTag}
            >
              {labelBySupportedLanguageTag[languageTag]}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  ) : null;
};

export default LocaleDropdown;
