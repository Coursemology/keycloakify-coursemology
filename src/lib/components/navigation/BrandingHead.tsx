import { FC, ReactNode } from "react";
import { Text } from "@chakra-ui/react";

import Link from "../core/Link";

interface BrandProps {
  textNode: ReactNode;
  brandUrl: string;
}

const Brand: FC<BrandProps> = (props) => {
  return (
    <Link
      className="hover:text-primary"
      color="inherit"
      url={props.brandUrl}
      style={{ textDecoration: "none" }}
    >
      <Text fontWeight="medium" fontSize="xl" className="tracking-tighter">
        {props.textNode}
      </Text>
    </Link>
  );
};

interface BrandingHeadContainerProps {
  children: ReactNode;
}

const BrandingHeadContainer: FC<BrandingHeadContainerProps> = (props) => (
  <div className="flex h-[4.5rem] items-center justify-between px-4">
    {props.children}
  </div>
);

interface BrandingHeadProps {
  textNode: ReactNode;
  brandUrl: string;
}

const BrandingHead: FC<BrandingHeadProps> = (props): JSX.Element => {
  return (
    <BrandingHeadContainer>
      <div className="flex items-center space-x-2">
        <Brand textNode={props.textNode} brandUrl={props.brandUrl} />
      </div>
    </BrandingHeadContainer>
  );
};

export default BrandingHead;
