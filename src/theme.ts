import { createTheme } from '@mui/material/styles';

export const designTokens = {
  colors: {
    surface: '#faf9ff',
    surfaceDim: '#ccdaff',
    surfaceBright: '#faf9ff',
    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: '#f1f3ff',
    surfaceContainer: '#e9edff',
    surfaceContainerHigh: '#e1e8ff',
    surfaceContainerHighest: '#d8e2ff',
    onSurface: '#051a3e',
    onSurfaceVariant: '#434654',
    inverseSurface: '#1d3054',
    inverseOnSurface: '#edf0ff',
    outline: '#737685',
    outlineVariant: '#c3c6d6',
    surfaceTint: '#0c56d0',
    primary: '#003d9b',
    onPrimary: '#ffffff',
    primaryContainer: '#0052cc',
    onPrimaryContainer: '#c4d2ff',
    inversePrimary: '#b2c5ff',
    secondary: '#4f5f7b',
    onSecondary: '#ffffff',
    secondaryContainer: '#cdddff',
    onSecondaryContainer: '#51617e',
    tertiary: '#004b59',
    onTertiary: '#ffffff',
    tertiaryContainer: '#006477',
    onTertiaryContainer: '#76e2ff',
    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#93000a',
    primaryFixed: '#dae2ff',
    primaryFixedDim: '#b2c5ff',
    onPrimaryFixed: '#001848',
    onPrimaryFixedVariant: '#0040a2',
    secondaryFixed: '#d6e3ff',
    secondaryFixedDim: '#b7c7e8',
    onSecondaryFixed: '#091c35',
    onSecondaryFixedVariant: '#374763',
    tertiaryFixed: '#afecff',
    tertiaryFixedDim: '#48d7f9',
    onTertiaryFixed: '#001f27',
    onTertiaryFixedVariant: '#004e5d',
    background: '#faf9ff',
    onBackground: '#051a3e',
    surfaceVariant: '#d8e2ff',
  },
  rounded: {
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  spacing: {
    base: 8,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    sidebarWidth: 240,
    maxContentWidth: 1440,
  },
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: designTokens.colors.primary,
      contrastText: designTokens.colors.onPrimary,
      light: designTokens.colors.primaryContainer,
      dark: '#002d73',
    },
    secondary: {
      main: designTokens.colors.secondary,
      contrastText: designTokens.colors.onSecondary,
      light: designTokens.colors.secondaryContainer,
      dark: '#374763',
    },
    error: {
      main: designTokens.colors.error,
      contrastText: designTokens.colors.onError,
      light: designTokens.colors.errorContainer,
      dark: designTokens.colors.onErrorContainer,
    },
    background: {
      default: designTokens.colors.background,
      paper: designTokens.colors.surfaceContainerLowest,
    },
    text: {
      primary: designTokens.colors.onSurface,
      secondary: designTokens.colors.onSurfaceVariant,
    },
    divider: designTokens.colors.outlineVariant,
  },
  typography: {
    fontFamily: "'Playfair Display', Georgia, serif",
    h1: {
      fontSize: '42px',
      fontWeight: 700,
      lineHeight: '52px',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '40px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
    button: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '0.5px',
      textTransform: 'none',
    },
    caption: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: '16px',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: designTokens.spacing.base,
  shadows: [
    'none',
    'none',
    '0px 4px 8px rgba(9, 30, 66, 0.08)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
    '0px 8px 16px rgba(9, 30, 66, 0.15)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: designTokens.colors.background,
          color: designTokens.colors.onBackground,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.rounded.default,
          boxShadow: 'none',
          minHeight: 32,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: designTokens.colors.primaryContainer,
          color: designTokens.colors.onPrimary,
          '&:hover': {
            backgroundColor: designTokens.colors.primary,
          },
        },
        containedSecondary: {
          backgroundColor: designTokens.colors.secondaryContainer,
          color: designTokens.colors.primary,
          '&:hover': {
            backgroundColor: designTokens.colors.secondaryFixedDim,
          },
        },
        text: {
          color: designTokens.colors.secondary,
        },
        outlined: {
          borderColor: designTokens.colors.outlineVariant,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${designTokens.colors.outlineVariant}`,
          borderRadius: designTokens.rounded.lg,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(9, 30, 66, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: designTokens.colors.surfaceContainerLowest,
          borderRadius: designTokens.rounded.default,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.primaryContainer,
            borderWidth: 2,
            boxShadow: `0 0 0 2px ${designTokens.colors.onPrimaryContainer}`,
          },
        },
        notchedOutline: {
          borderColor: designTokens.colors.outlineVariant,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.rounded.full,
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '16px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 48,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: designTokens.colors.surfaceContainerLow,
          color: designTokens.colors.onSurfaceVariant,
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '16px',
          letterSpacing: '0.5px',
        },
        root: {
          borderBottomColor: designTokens.colors.outlineVariant,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: designTokens.colors.surfaceContainerLow,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.rounded.default,
          color: designTokens.colors.onSurfaceVariant,
          '&.Mui-selected': {
            backgroundColor: designTokens.colors.primaryFixed,
            color: designTokens.colors.onPrimaryFixedVariant,
            borderLeft: `4px solid ${designTokens.colors.primaryContainer}`,
            '&:hover': {
              backgroundColor: designTokens.colors.primaryFixed,
            },
          },
        },
      },
    },
  },
});
