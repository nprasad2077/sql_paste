import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';

const ListConverter = () => {
  const [input, setInput] = useState('');
  const [addSpaces, setAddSpaces] = useState(true);
  const [surroundWithQuotes, setSurroundWithQuotes] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput('');
    setSurroundWithQuotes(false);
  };

  const handleSurround = () => {
    setSurroundWithQuotes(true);
  };

  const handleSpacesChange = (event) => {
    setAddSpaces(event.target.checked);
  };

  const handleCopy = async () => {
    const textToCopy = getCommaSeparatedList();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setShowSnackbar(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const getCommaSeparatedList = () => {
    if (!input.trim()) return '';
    
    const items = input
      .split('\n')
      .map(item => item.trim())
      .filter(item => item.length > 0)
      .map(item => surroundWithQuotes ? `'${item}'` : item);
    
    return items.join(addSpaces ? ', ' : ',');
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
            mb: 3,
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Typography 
              variant="h6" 
              align="center"
            >
              List Converter
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              flexWrap: 'wrap' 
            }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<FormatQuoteIcon />}
                onClick={handleSurround}
              >
                Surround
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleClear}
              >
                Clear Text
              </Button>
            </Box>
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
Plymouth
Union
Sioux"
            sx={{ 
              mb: 4,
              '& .MuiOutlinedInput-root': {
                fontFamily: 'monospace'
              }
            }}
          />

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}>
            <Typography 
              variant="subtitle1" 
              gutterBottom 
            >
              Comma-separated output:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={addSpaces}
                    onChange={handleSpacesChange}
                    name="addSpaces"
                    color="primary"
                  />
                }
                label="Add spaces after commas"
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={copySuccess ? <CheckIcon /> : <ContentCopyIcon />}
                onClick={handleCopy}
                disabled={!getCommaSeparatedList()}
              >
                {copySuccess ? 'Copied!' : 'Copy'}
              </Button>
            </Box>
          </Box>
          
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
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Container>
  );
};

export default ListConverter;