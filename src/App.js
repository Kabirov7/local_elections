import './App.css';
import MyTextField from "./Components/form/TextField";
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Applicant from "./Components/Applicant/Applicant";

const App = () => {
  return (
    <div className="App">
      <Applicant />
    </div>
  );
}

export default App;
