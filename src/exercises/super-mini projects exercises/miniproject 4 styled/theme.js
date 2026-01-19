import { createTheme } from '@mui/material/styles';

// Brand Color Palette: Modern Indigo + Warm Coral
// Primary: Deep Indigo (#3730A3) - Trust, professionalism
// Secondary: Coral (#F97316) - Energy, action
// Neutral grays for backgrounds and text

const theme = createTheme({
  palette: {
    primary: {
      main: '#3730A3',      // Deep Indigo
      light: '#6366F1',     // Lighter Indigo
      dark: '#1E1B4B',      // Dark Indigo
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F97316',      // Coral Orange
      light: '#FB923C',     // Light Coral
      dark: '#EA580C',      // Dark Coral
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',   // Light gray-blue
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',   // Slate 800
      secondary: '#64748B', // Slate 500
    },
    error: {
      main: '#DC2626',
    },
    success: {
      main: '#16A34A',
    },
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.75rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(55, 48, 163, 0.25)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(55, 48, 163, 0.25)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(55, 48, 163, 0.15)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6366F1',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;
