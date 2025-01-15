import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import type { I18n } from "../../i18n";

interface LocaleDropdownProps {
  i18n: I18n;
}

const LocaleDropdown = (props: LocaleDropdownProps): JSX.Element | null => {
  const { i18n } = props;
  const { currentLanguage, enabledLanguages } = i18n;

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {currentLanguage.label}
        </MenuButton>
        <MenuList>
          {enabledLanguages.map(({ languageTag, label, href }, i) => (
            <MenuItem
              id={`language-${i + 1}`}
              as="a"
              href={href}
              key={languageTag}
            >
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default LocaleDropdown;
