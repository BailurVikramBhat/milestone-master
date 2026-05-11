import { Box, Typography, type SxProps, type Theme } from "@mui/material";

import { useId, type ReactNode } from "react";
import { designTokens } from "../theme";
import AppTextField, { type AppTextFieldProps } from "./AppTextField";

type AppInputGroupProps = Omit<AppTextFieldProps, "label"> & {
  label: ReactNode;
  containerSx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
};
export default function AppInputGroup({
  label,
  id,
  required,
  containerSx,
  labelSx,
  fullWidth = true,
  ...textFieldProps
}: AppInputGroupProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <Box sx={{ width: fullWidth ? "100%" : "auto", ...containerSx }}>
      <Typography
        component="label"
        htmlFor={inputId}
        variant="body2"
        sx={{
          display: "inline-block",
          mb: 0.75,
          fontWeight: 600,
          color: designTokens.colors.primary,
          ...labelSx,
        }}
      >
        {label}
        {required && (
          <Typography
            component="span"
            aria-hidden="true"
            sx={{
              ml: 0.25,
              color: "error.main",
              fontWeight: 700,
            }}
          >
            *
          </Typography>
        )}
      </Typography>
      <AppTextField
        {...textFieldProps}
        id={inputId}
        required={required}
        fullWidth={fullWidth}
      />
    </Box>
  );
}
