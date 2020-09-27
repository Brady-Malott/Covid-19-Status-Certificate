import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export class Details extends Component {

  render() {

    const { values } = this.props;

    console.log(this.props);

    return (
      <React.Fragment>
        <Typography variant="h1" gutterBottom align="center">
          {values.cert_uuid}
        </Typography>
      </React.Fragment>
    );
  }
}

export default Details;