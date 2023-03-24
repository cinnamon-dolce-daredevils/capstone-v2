import { useTheme } from '@emotion/react';
import { Button, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import React, {useState, createContext} from 'react';

// trying to carry over the word light or dark to another component


const ThemeChooser = () => {
  const theme = useTheme();
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <>
      <Button variant="contained"sx={{ p: 1, color: theme.palette.common.white }}onClick={ handleToggle}>
        {isOn  ? 'Light Mode' : 'Dark Mode'}
      </Button>
     
    </>
  );
};

export default ThemeChooser;
