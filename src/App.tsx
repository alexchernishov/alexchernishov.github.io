import React from 'react';
import './App.css';
import Board from "./board";
import {Grid, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/styles";
import {lightTheme} from "./styles";

function App() {
  return (<>
          <CssBaseline />
            <ThemeProvider theme={lightTheme}>
                <Grid container
                      spacing={2}
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Board/>
                </Grid>
            </ThemeProvider>
      </>
  );
}

export default App;
