import {
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { designTokens } from "../theme";
import AppButton from "./AppButton";

type LogoutConfirmationDialogProps = {
  open: boolean;
  isLoggingOut: boolean;
  errorMessage: string;
  onCancel: () => void;
  onConfirm: () => void;
};
export default function LogoutConfirmationDialog({
  open,
  isLoggingOut,
  errorMessage,
  onConfirm,
  onCancel,
}: LogoutConfirmationDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={isLoggingOut ? undefined : onCancel}
      aria-labelledby="logout-dialog-title"
      aria-describedby="logout-dialog-description"
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3 },
      }}
    >
      <DialogContent
        sx={{ display: "flex", alignItems: "flex-start", gap: 2, pt: 5, pb: 2 }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            minWidth: 48,
            borderRadius: 2,
            bgcolor: "#fde8e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogoutIcon sx={{ color: "error.main", fontSize: 24 }} />
        </Box>
        <Box>
          <DialogTitle
            id="logout-dialog-title"
            sx={{ p: 0, mb: 0.5, fontWeight: 800, fontSize: "larger" }}
          >
            Logout
          </DialogTitle>
          <DialogContentText id="logout-dialog-description" sx={{
            fontSize:{
                "xs": "smaller"
            }
          }}>
            Are you sure you want to log out of your session?
          </DialogContentText>
          {errorMessage && (
            <Alert severity="error" variant="filled" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          borderTop: 1,
          borderColor: "divider",
          px: {
            "xs": 1,
            "md":3
          },
          py: {
            "xs": 1,
            "md":2
          },
          backgroundColor: `${designTokens.colors.background}`,
        }}
      >
        <AppButton
          onClick={onCancel}
          disabled={isLoggingOut}
          fullWidth={false}
          variant="text"
          sx={{
            borderRadius: 0,
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        >
          Cancel
        </AppButton>
        <AppButton
          onClick={onConfirm}
          color="error"
          variant="contained"
          disabled={isLoggingOut}
          disableElevation
          fullWidth={false}
          sx={{
            borderRadius: 0,
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </AppButton>
      </DialogActions>
    </Dialog>
  );
}
