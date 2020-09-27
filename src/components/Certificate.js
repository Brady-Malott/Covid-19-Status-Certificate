import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export class Certificate extends Component {
  makeNew = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {

    const { cert_uuid } = this.props.values;

    console.log(cert_uuid);

    return (
      <React.Fragment>
  
        <Typography variant="h3" gutterBottom align="center">
          {cert_uuid}
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
          >Get new certificate</Button>

      </React.Fragment>
    );
  }
}

export default Certificate;