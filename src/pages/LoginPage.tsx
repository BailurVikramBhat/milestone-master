import { Box, Button, Checkbox, Link, Typography } from "@mui/material";
import AuthLayout from "./AuthLayout";
import { designTokens } from "../theme";
import AppInputGroup from "../components/AppInputGroup";
import AppButton from "../components/AppButton";

export default function LoginPage() {
  return (
    <AuthLayout
      leftContent={
        <Box
          sx={{
            display: "flex",
            maxHeight: "100vh",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              paddingBottom: "2rem",
            }}
          >
            <Typography variant="h1" fontWeight={700}>
              Milestone Master
            </Typography>
            <Box>
              <Typography>
                Enterprise grade task management designed for high-velocity
                teams.
              </Typography>
              <Typography>
                Align your strategies, streamline workflows and ship faster.
              </Typography>
            </Box>
          </Box>
        </Box>
      }
      rightContent={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            // border: "1px solid black",
            maxWidth: "400px",
            marginX: "auto",
            justifyContent: "center",
            alignContent: "space-around",
            backgroundColor: `${designTokens.colors.background}`,
          }}
        >
          <Box
            sx={{
              width: "100%",

              marginX: "auto",
              padding: "1rem",
            }}
          >
            <Typography variant="h2">Welcome back</Typography>
            <Typography variant="caption">
              Please enter your details to sign in.
            </Typography>
          </Box>
          <Box
            sx={{
              marginY: "1rem",
              marginX: "1rem",
            }}
          >
            <AppInputGroup
              label="Email Address"
              fieldType="email"
              placeholder="Enter your email"
              required
              size="small"
              containerSx={{
                marginBottom: "1rem",
              }}
            />
            <AppInputGroup
              label="Password"
              fieldType="password"
              placeholder="********"
              required
              size="small"
              containerSx={{
                marginBottom: "1rem",
              }}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Checkbox
                  sx={{
                    m: 0,
                    p: 0,
                  }}
                  id="remember-me"
                  slotProps={{
                    input: { "aria-label": "Accept terms and conditions" },
                  }}
                />
                <Typography
                  component="label"
                  htmlFor="remember-me"
                  variant="body2"
                >
                  Remember me for 30 days
                </Typography>
              </Box>
              <Box>
                <Link>Forgot Password?</Link>
              </Box>
            </Box>
            <AppButton>Sign In</AppButton>
          </Box>
        </Box>
      }
    />
  );
}
