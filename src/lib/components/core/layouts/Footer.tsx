import { Text } from "@chakra-ui/react";

import { SUPPORT_EMAIL } from "../../../constants";
import { useCoursemologyUrls } from "../../hooks/useCoursemologyUrls";
import Link from "../Link";

const Footer = (): JSX.Element => {
  const { homeUrl } = useCoursemologyUrls();

  return (
    <footer className="bg-neutral-50 p-5 border-only-t-neutral-200">
      <div className="m-auto flex flex-col space-y-5">
        <section className="-mx-3 -my-1 flex flex-wrap">
          <Link
            className="mx-3 my-1"
            external
            opensInNewTab
            url={`${homeUrl}/pages/terms_of_service`}
          >
            Terms of Service
          </Link>

          <Link
            className="mx-3 my-1"
            external
            opensInNewTab
            url={`${homeUrl}/pages/privacy_policy`}
          >
            Privacy Policy
          </Link>

          <Link className="mx-3 my-1" external url={`mailto:${SUPPORT_EMAIL}`}>
            Contact Us
          </Link>

          <Link
            className="mx-3 my-1"
            external
            url="https://coursemology.github.io/coursemology-help/"
            opensInNewTab
          >
            Instructors' Guide
          </Link>
        </section>

        <section className="flex items-end justify-between">
          <Text color="text.secondary" variant="caption">
            © 2013–2024 Coursemology.
          </Text>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
