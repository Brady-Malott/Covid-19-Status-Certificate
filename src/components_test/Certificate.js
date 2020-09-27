import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export class Certificate extends Component {
  makeNew = e => {
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
  
        <Typography variant="h1" gutterBottom align="center">
          123456789 {/* we will eventually want this number to be granted by firebase*/}
        </Typography>
      
        <Typography variant="h4" gutterBottom align="center">
          This is a certificate of the user's COVID-19 status 
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          You may validate this certificate using the ID above
        </Typography>

        <Button
            color="primary"
            variant="contained"
            onClick={this.makeNew}
            className="button-margin"
          >Continue</Button>

      </React.Fragment>
    );
  }
}

export default Certificate;