import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";
export type AppButtonProps = ButtonProps & {
  fullWidth?: boolean;
  loadingText?: ReactNode;
};
export default function AppButton({
  children,
  loading = false,
  loadingText,
  disabled,
  variant = "contained",
  type = "button",
  disableElevation = true,
  fullWidth = true,
  ...buttonProps
}: AppButtonProps) {
  return (
    <Button
      sx={{
        py:2,
        width: fullWidth ? "100%" : "auto",
      }}
      {...buttonProps}
      type={type}
      variant={variant}
      disabled={disabled}
      loading={loading}
      disableElevation={disableElevation}
    >
      {loading && loadingText ? loadingText : children}
    </Button>
  );
}
