// src/components/ListConverter.jsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ListConverter = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
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
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            List Converter
          </Typography>
          
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
            sx={{ mb: 3 }}
          />

          <Typography variant="subtitle1" gutterBottom>
            Comma-separated output:
          </Typography>
          
          <TextField
            fullWidth
            multiline
            rows={2}
            value={getCommaSeparatedList()}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            sx={{
              backgroundColor: '#f5f5f5',
              '& .MuiOutlinedInput-root': {
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
