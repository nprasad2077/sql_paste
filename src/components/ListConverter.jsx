// src/components/ListConverter.jsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'; // Added Button import
import DeleteIcon from '@mui/icons-material/Delete'; // Optional: for icon

const ListConverter = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput('');
  };

  const getCommaSeparatedList = () => {
    if (!input.trim()) return '';
    
    const items = input
      .split('\n')
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    return items.join(',');
  };

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          mt: 4, 
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            width: '100%',
            maxWidth: '900px'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3
          }}>
            <Typography 
              variant="h6" 
              align="center"
            >
              List Converter
            </Typography>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleClear}
              sx={{ ml: 2 }}
            >
              Clear Text
            </Button>
          </Box>
          
          <TextField
            fullWidth
            label="Enter your list (one item per line)"
            multiline
            rows={8}
            value={input}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Example:
51640
57717
51001"
            sx={{ 
              mb: 4,
              '& .MuiOutlinedInput-root': {
                fontFamily: 'monospace'
              }
            }}
          />

          <Typography 
            variant="subtitle1" 
            gutterBottom 
            align="center"
            sx={{ mb: 2 }}
          >
            Comma-separated output:
          </Typography>
          
          <TextField
            fullWidth
            multiline
            rows={3}
            value={getCommaSeparatedList()}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            sx={{
              backgroundColor: '#f5f5f5',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'monospace',
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
              },
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default ListConverter;
