import {
  LockOutlined,
  MailOutline,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { useState } from "react";
type AppTextFieldType = "text" | "email" | "password";
export type AppTextFieldProps = TextFieldProps & {
  fieldType?: AppTextFieldType;
};

export default function AppTextField({
  fieldType = "text",
  type,
  slotProps,
  disabled,
  ...textFieldProps
}: AppTextFieldProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isEmail = fieldType === "email";
  const isPassword = fieldType === "password";
  const resolvedType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : isEmail
      ? "email"
      : (type ?? "text");
  const startAdornment = isEmail ? (
    <InputAdornment position="start">
      <MailOutline fontSize="small" />
    </InputAdornment>
  ) : isPassword ? (
    <InputAdornment position="start">
      <LockOutlined fontSize="small" />
    </InputAdornment>
  ) : undefined;
  const endAdornment = isPassword ? (
    <InputAdornment position="end">
      <IconButton
        edge="end"
        disabled={disabled}
        aria-label={showPassword ? "Hide password" : "Show password"}
        onClick={() => setShowPassword((current) => !current)}
        onMouseDown={(event) => event.preventDefault()}
      >
        {showPassword ? (
          <VisibilityOffOutlined fontSize="small" />
        ) : (
          <VisibilityOutlined fontSize="small" />
        )}
      </IconButton>
    </InputAdornment>
  ) : undefined;
  return (
    <TextField
      {...textFieldProps}
      disabled={disabled}
      type={resolvedType}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          startAdornment,
          endAdornment,
        },
      }}
    />
  );
}
