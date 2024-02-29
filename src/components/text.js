import React, { useState } from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import "../App.css";

function Text({ appTitle, theme }) {
  const [text, setText] = useState("");
  const [wordLength, setwordLength] = useState(0);
  const [timeToRead, setTimeToRead] = useState(0);
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);
  const handleOnChange = (e) => {
    setText(e.target.value);
    let textArray = e.target.value.split(" ");
    setwordLength(textArray.filter(String).length);
    let num = (1 / 250) * textArray.filter(String).length;
    setTimeToRead(num.toFixed(2));
  };
  const upperCase = () => {
    setText(text.toUpperCase());
    setAlert(true);
    setAlertMsg("Text is converted to upperCase");
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const highlightF = () => {
    let newText = text.split(" ");
    newText = newText.map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
    });
    setText(newText.join(" "));
  };
  const clearText = () => {
    setText("");
    setAlert(true);
    setAlertMsg("Text cleared");
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  const closePopUp = () => {
    if (alert) setAlert(false);
  };
  return (
    <div>
      <div className="dailogue-box">
        {alert && (
          <Alert severity="success" onClose={closePopUp}>
            {alertMsg}.
          </Alert>
        )}
      </div>

      <h1>{appTitle}</h1>

      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="Text transformations"
        multiline
        rows={4}
        value={text}
        margin="normal"
        onChange={handleOnChange}
      />

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={upperCase}>
          UpperCase
        </Button>
        <Button variant="contained" onClick={highlightF}>
          Highlight First
        </Button>
        <Button variant="contained" onClick={clearText}>
          Clear Text
        </Button>
      </Stack>
      <Box>
        <h2>Preview</h2>
        <hr />
        <p>
          {wordLength} words and {timeToRead} minutes of read
        </p>
        <p>{text}</p>
      </Box>
    </div>
  );
}

Text.propTypes = {
  appTitle: PropTypes.string,
};

Text.defaultProps = {
  appTitle: "Text Utils",
};

export default Text;
