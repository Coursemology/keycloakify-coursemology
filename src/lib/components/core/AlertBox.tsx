import { FC } from "react";
import { Alert, AlertIcon, AlertProps, Text } from "@chakra-ui/react";

interface AlertBoxProps extends AlertProps {}

const AlertBox: FC<AlertBoxProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Alert {...otherProps}>
      <AlertIcon />
      <Text fontSize="sm">{children}</Text>
    </Alert>
  );
};

export default AlertBox;
