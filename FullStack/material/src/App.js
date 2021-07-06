import React from 'react';
//! SHOWING SOME COOL USAGES OF MATERIAL UI
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Card,
    CardContent,
    TextField,
    CssBaseline,
    AppBar,
    Toolbar,
} from '@material-ui/core';

import SimpleMenu from './components/SimpleMenu';
import TemporaryDrawer from './components/TemporaryDrawer';


const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
function App() {
  return (
    <div className="App">
    <CssBaseline/>

    <AppBar>
        <Toolbar>
        <TemporaryDrawer/>
        </Toolbar>
    </AppBar>
      <br/>

      <br/>
      
    <Card>
        <CardContent>
            <h1>This is content within my card</h1>
            <TextField label="Standard" variant="outlined"/>
            <Button>Click</Button><SimpleMenu/>
        </CardContent>
    </Card>





    </div>
  );
}

export default App;
