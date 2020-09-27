import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export class Details extends Component {

  render() {

    const { values } = this.props;

    return (
      <React.Fragment>

        <Typography variant="h3" gutterBottom align="center">
          Certificate For:
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
          {values.cert_uuid}
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Age: {values.age}
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Gender: {values.gender} 
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Ethnic Background: {values.race} 
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          Workplace Sector: {values.workSector} 
        </Typography>
        <Typography variant="h6" gutterBottom align="center">
          {values.hasTested ? `They were tested on ${values.testDate ? values.testDate : 'date not given'}` : 'They have not been tested'}
        </Typography>

        {/* If the user has been tested, show the date and the result */}
        {values.hasTested &&
        <Typography variant="h6" gutterBottom align="center">
          Results: {values.testResult ? values.testResult : 'undefined'}
        </Typography>}

      </React.Fragment>
    );
  }
}

export default Details;