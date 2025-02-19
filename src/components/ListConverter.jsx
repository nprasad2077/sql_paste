// src/components/ListConverter.jsx
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DataObjectIcon from "@mui/icons-material/DataObject";

const ListConverter = () => {
  const [input, setInput] = useState("");
  const [addSpaces, setAddSpaces] = useState(true);
  const [surroundWithQuotes, setSurroundWithQuotes] = useState(false);
  const [surroundWithParentheses, setSurroundWithParentheses] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput("");
    setSurroundWithQuotes(false);
    setSurroundWithParentheses(false);
  };

  const handleSurround = () => {
    setSurroundWithQuotes(!surroundWithQuotes);
  };

  const handleParentheses = () => {
    setSurroundWithParentheses(!surroundWithParentheses);
  };

  const handleSpacesChange = (event) => {
    setAddSpaces(event.target.checked);
  };

  const getCommaSeparatedList = () => {
    if (!input.trim()) return "";

    const items = input
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
      .map((item) => {
        let processed = item;
        if (surroundWithQuotes) {
          processed = `'${processed}'`;
        }
        if (surroundWithParentheses) {
          processed = `(${processed})`;
        }
        return processed;
      });

    return items.join(addSpaces ? ", " : ",");
  };

  return (
    <Container maxWidth={false} sx={{ px: 4 }}>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography variant="h6" align="center">
              List Converter
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<FormatQuoteIcon />}
                onClick={handleSurround}
                sx={{
                  bgcolor: surroundWithQuotes ? "primary.dark" : "primary.main",
                }}
              >
                Surround with Quotes
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DataObjectIcon />}
                onClick={handleParentheses}
                sx={{
                  bgcolor: surroundWithParentheses
                    ? "primary.dark"
                    : "primary.main",
                }}
              >
                Add Parentheses
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
            rows={12}
            value={input}
            onChange={handleInputChange}
            variant="outlined"
            placeholder="Example:
Plymouth
Union
Sioux"
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                fontFamily: "monospace",
              },
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Comma-separated output:
            </Typography>
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
          </Box>

          <TextField
            fullWidth
            multiline
            rows={6}
            value={getCommaSeparatedList()}
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                fontFamily: "monospace",
                "& fieldset": {
                  borderColor: "#e0e0e0",
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
