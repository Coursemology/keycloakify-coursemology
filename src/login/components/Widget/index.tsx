import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

interface WidgetProps extends ContainerProps {
  titleNode: ReactNode;
  subtitle?: string;
}

const Widget = (props: WidgetProps): JSX.Element => (
  <div
    className={`w-[460px] rounded-2xl border-neutral-200 sm:max-w-2xl sm:border sm:border-solid sm:p-10 ${
      props.className ?? ""
    }`}
  >
    <div className="mb-8 space-y-3">
      <Text fontWeight="medium" fontSize="2xl">
        {props.titleNode}
      </Text>

      {props.subtitle && <Text color="text.secondary">{props.subtitle}</Text>}
    </div>

    {props.children}
  </div>
);

const WidgetBody = (props: ContainerProps): JSX.Element => (
  <section className={`space-y-5 ${props.className ?? ""}`}>
    {props.children}
  </section>
);

const WidgetFoot = (props: ContainerProps): JSX.Element => (
  <section
    className={`mt-6 pt-5 border-only-t-neutral-200 ${props.className ?? ""}`}
  >
    {props.children}
  </section>
);

export default Object.assign(Widget, { Body: WidgetBody, Foot: WidgetFoot });
