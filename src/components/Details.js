import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export class Details extends Component {

  render() {

    const { values } = this.props;

    console.log(this.props.values);

    return (
      <React.Fragment>
        <Typography variant="h3" gutterBottom align="center">
          Certificate For:
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
          {values.cert_uuid}
        </Typography>
      </React.Fragment>
    );
  }
}

export default Details;