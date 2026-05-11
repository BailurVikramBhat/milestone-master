import { Box, Typography } from "@mui/material";
import AuthLayout from "./AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout
      leftContent={
        <Box
          sx={{
            display: "flex",
            maxHeight: "100vh",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h2" fontWeight={700}>
              Milestone Master
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h1" fontWeight={700}>
              Manage complexity with absolute clarity
            </Typography>
            <Box>
              <Typography>
                Enterprise grade task management designed for high-velocity
                teams.
              </Typography>
              <Typography>
                Systemize your workflow and deliver the results
              </Typography>
            </Box>
          </Box>
        </Box>
      }
      rightContent={<p>Register page coming soon</p>}
    />
  );
}
