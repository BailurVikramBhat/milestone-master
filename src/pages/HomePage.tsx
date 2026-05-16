import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { designTokens } from "../theme";
import authService from "../services/authService";
import { useState } from "react";
import LogoutConfirmationDialog from "../components/LogoutConfirmationDialog";

export default function Homepage() {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const [logoutError, setLogoutError] = useState<string>("");
  const navigate = useNavigate();

  async function handleLogoutConfirm() {
    try {
      setIsLoggingOut(true);
      setLogoutError("");
      await authService.logout();
      navigate("/login", { replace: true });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to log out. Please try again later.";

      setLogoutError(message);
    } finally {
      setIsLoggingOut(false);
    }
  }
  function handleLogoutClick() {
    setLogoutError("");
    setIsLogoutDialogOpen(true);
  }

  function handleLogoutCancel() {
    setIsLogoutDialogOpen(false);
    setLogoutError("");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: designTokens.colors.background,
        color: designTokens.colors.onBackground,
      }}
    >
      <Box
        component="header"
        sx={{
          height: 64,
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: designTokens.colors.surfaceContainerLowest,
          borderBottom: `1px solid ${designTokens.colors.outlineVariant}`,
        }}
      >
        <Typography variant="h2" fontWeight={800}>
          Milestone Master
        </Typography>

        <Button variant="outlined" color="error" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Box>

      <Box
        component="main"
        sx={{
          maxWidth: designTokens.spacing.maxContentWidth,
          mx: "auto",
          px: 4,
          py: 5,
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h2" gutterBottom>
              Welcome back
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Track your milestones, manage project progress, and keep your team
              aligned.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            <Card>
              <CardContent>
                <Stack spacing={1.5}>
                  <Chip label="Overview" color="primary" size="small" />

                  <Typography variant="h3">Projects</Typography>

                  <Typography variant="body2" color="text.secondary">
                    View and manage all active milestone-based projects.
                  </Typography>

                  <Typography variant="h2">0</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={1.5}>
                  <Chip label="Progress" color="secondary" size="small" />

                  <Typography variant="h3">Milestones</Typography>

                  <Typography variant="body2" color="text.secondary">
                    Monitor upcoming, completed, and delayed milestones.
                  </Typography>

                  <Typography variant="h2">0</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={1.5}>
                  <Chip label="Focus" color="primary" size="small" />

                  <Typography variant="h3">Tasks</Typography>

                  <Typography variant="body2" color="text.secondary">
                    Track assigned work and pending action items.
                  </Typography>

                  <Typography variant="h2">0</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h3">Getting started</Typography>

                <Typography variant="body2" color="text.secondary">
                  Your dashboard shell is ready. When milestone functionality is available, it will show up here.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
      <LogoutConfirmationDialog
        open={isLogoutDialogOpen}
        isLoggingOut={isLoggingOut}
        errorMessage={logoutError}
        onCancel={handleLogoutCancel}
        onConfirm={handleLogoutConfirm}
      />
    </Box>
  );
}
