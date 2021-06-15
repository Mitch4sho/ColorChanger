import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "pink",
        height: "100%",
    },
    header: {
        background: "#ffffff",
        color: "#7abeee",
        height: "3rem",
        fontSize: "2rem",
    },
    button: {
        '&:hover': {
            background: 'black',
            color: '#ffffff',
          },
    },
    backgroundColor: {
        width: "15rem",
        height: "3rem",
    }
  }));
  
function BackgroundColor () {
    const classes = useStyles();
    return (
        <Box display="flex"  justifyContent= "center">
            <Box className={classes.backgroundColor} border={3} >Background Color: <span>#colorValue</span></Box>
            <Button className={classes.button} variant="outlined">
                Click Me
            </Button>
        </Box>
    )
}



function ColorChanger () {
    const classes = useStyles();
    const [state, setState] = useState([]);
    console.log(state)
    return (
        <div className= {classes.root}>
            <header className={classes.header}>Color Flipper</header>
            <Box height="100%">
                <BackgroundColor  />
            </Box>
        </div>
    )
}

export default ColorChanger;
