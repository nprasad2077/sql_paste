import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListConverter from './components/ListConverter';
import React from 'react';
import "./styles/main.css";

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f0f2f5',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          width: '100vw',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        },
        '#root': {
          width: '100%',
          minHeight: '100vh',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container 
        maxWidth={false} 
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          bgcolor: 'background.default',
          px: 2,
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            pt: 8,
            pb: 4,
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{
              mb: 4,
              textAlign: 'center',
              width: '100%',
              fontWeight: 700,
              letterSpacing: 0.5,
              color: 'text.primary',
            }}
          >
            List to Comma Separator
          </Typography>
          <ListConverter />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;