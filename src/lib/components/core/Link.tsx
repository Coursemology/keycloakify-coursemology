import { FC } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

interface LinkProps extends ChakraLinkProps {
  url: string;
  opensInNewTab?: boolean;
  external?: boolean;
  disabled?: boolean;
}

const Link: FC<LinkProps> = (props) => {
  const { disabled, external, url, opensInNewTab, ...linkProps } = props;

  const children = (
    <>
      {props.children}
      {external && <ExternalLinkIcon mx="2px" />}
    </>
  );

  if (disabled) return children;

  return (
    <ChakraLink
      href={url}
      {...(opensInNewTab && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      {...linkProps}
    >
      {children}
    </ChakraLink>
  );
};

export default Link;
