import {
  Alert,
  Box,
  Checkbox,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import AuthLayout from "./AuthLayout";
import AppInputGroup from "../components/AppInputGroup";
import AppButton from "../components/AppButton";
import useLogin from "../hooks/useLogin";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";

export default function LoginPage() {
  const {
    values,
    errors,
    submitError,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange,
    handleSubmit,
  } = useLogin();
  return (
    <AuthLayout
      leftContent={
        <Box
          sx={{
            display: "flex",
            height:"100%",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pb: 4,
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
            minHeight: "100vh",
            maxWidth: "400px",
            marginX: "auto",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              mx: "auto",
              p: 2,
            }}
          >
            <Typography variant="h2">Welcome back</Typography>
            <Typography variant="caption">
              Sign in to continue managing your milestones.
            </Typography>
          </Box>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              my: 2,
              mx: 2,
            }}
          >
            <Box>
              {submitError && (
                <Alert
                  variant="filled"
                  severity="error"
                  sx={{
                    mb: 2,
                  }}
                >
                  {submitError}
                </Alert>
              )}
            </Box>
            
              <AppInputGroup
              required
                error={Boolean(errors.email)}
                helperText={errors.email}
                value={values.email}
                onChange={handleEmailChange}
                label="Email Address"
                fieldType="email"
                placeholder="Enter your email"
                size="small"
                containerSx={{
                  mb: 2,
                }}
              />
            
            
              <AppInputGroup
              required
                error={Boolean(errors.password)}
                helperText={errors.password}
                value={values.password}
                onChange={handlePasswordChange}
                label="Password"
                fieldType="password"
                placeholder="********"
                size="small"
                containerSx={{
                  mb: 2,
                }}
              />
            
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Checkbox
                  sx={{
                    m: 0,
                    p: 0,
                  }}
                  checked={values.rememberMe}
                  onChange={handleRememberMeChange}
                  id="remember-me"
                  slotProps={{
                    input: { "aria-label": "Remember me for 30 days" },
                  }}
                />
                <Typography
                  component="label"
                  htmlFor="remember-me"
                  variant="body2"
                  sx={{
                    verticalAlign: "middle"
                  }}
                >
                  Remember me for 30 days
                </Typography>
              </Box>
              <Box>
                <Link
      component={RouterLink}
      to="/forgot"
      underline="hover"
      sx={{
        fontSize: "small",
        fontWeight: 600,
      }}
    >
      Forgot Password?
    </Link>
              </Box>
            </Box>
            <AppButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In"}
            </AppButton>
          </Box>
          <Box
            sx={{
              mx: 2,
              my: 2,
              width: "auto",
            }}
          >
            <Divider
              sx={{
                fontSize: 12,
              }}
            >
              OR CONTINUE WITH
            </Divider>
            <Box
              sx={{
                my: 4,
              }}
            >
              <AppButton
                type="button"
                variant="outlined"
                startIcon={<GoogleIcon />}
              >
                Continue with Google
              </AppButton>
            </Box>
            <Box sx={{
                width: "100%",
                textAlign: "center"
            }}><Typography variant="caption">
    Don&apos;t have an account?{" "}
    <Link
      component={RouterLink}
      to="/register"
      underline="hover"
      sx={{
        fontWeight: 600,
      }}
    >
      Sign Up
    </Link>
  </Typography></Box>
          </Box>
        </Box>
      }
    />
  );
}
