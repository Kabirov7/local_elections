import './App.css';
import MyTextField from "./Components/form/TextField";
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ForApplicants from "./Components/Pages/ForApplicants";

const App = () => {
  return (
    <div className="App">
     <ForApplicants />
    </div>
  );
}

export default App;