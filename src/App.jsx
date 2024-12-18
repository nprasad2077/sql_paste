// src/App.jsx
import ListConverter from './components/ListConverter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Create a theme instance (you can customize this)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f0f2f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', py: 2 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ mb: 4 }}
        >
          List to Comma Separator
        </Typography>
        <ListConverter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
