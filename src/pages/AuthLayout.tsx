import { alpha, Box, Typography } from "@mui/material";
import loginBg from "../assets/auth-hero.jpg";
import { designTokens } from "../theme";
interface IAuthLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}
export default function AuthLayout({
  leftContent,
  rightContent,
}: IAuthLayoutProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            width: "50%",
            backgroundImage: `linear-gradient(
      ${alpha(designTokens.colors.surfaceTint, 0.85)}, 
      ${alpha(designTokens.colors.surfaceTint, 0.85)}
    ), url(${loginBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "flex", md: "flex" },
            color: `${designTokens.colors.onPrimary}`,
            padding: "1.5rem",
            maxHeight: "100vh",
          }}
        >
          {leftContent}
        </Box>
        <Box sx={{ width: "50%" }}>{rightContent}</Box>
      </Box>
    </>
  );
}
