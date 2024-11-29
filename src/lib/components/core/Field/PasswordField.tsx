import { ComponentProps, forwardRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup } from "@chakra-ui/react";

type PasswordTextFieldProps = ComponentProps<typeof Input> & {
  onChangePasswordVisibility?: (visibility: boolean) => void;
  disablePasswordVisibilitySwitch?: boolean;
  size: string;
};

const PasswordTextField = forwardRef<HTMLDivElement, PasswordTextFieldProps>(
  (props, ref): JSX.Element => {
    const {
      onChangePasswordVisibility,
      disablePasswordVisibilitySwitch,
      size,
      ...textFieldProps
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleChangePasswordVisibility = (): void =>
      setShowPassword((state) => {
        onChangePasswordVisibility?.(!state);
        return !state;
      });

    return (
      <InputGroup>
        <Input
          {...textFieldProps}
          ref={ref}
          type={showPassword ? "text" : "password"}
          size={size}
        />
        {!disablePasswordVisibilitySwitch && (
          <IconButton
            aria-label="show password visibility"
            onClick={handleChangePasswordVisibility}
            onMouseDown={(e): void => e.preventDefault()}
            icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
            size={size}
            tabIndex={-1}
          />
        )}
      </InputGroup>
    );
  },
);

PasswordTextField.displayName = "PasswordTextField";

export default PasswordTextField;
