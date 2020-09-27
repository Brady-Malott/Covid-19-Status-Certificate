import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class Certificate extends Component {
  makeNew = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {

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