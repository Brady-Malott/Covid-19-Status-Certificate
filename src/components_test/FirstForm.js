import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

export class FirstForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      // <MuiThemeProvider>
      //   <>
      //     <Dialog
      //       open
      //       fullWidth
      //       maxWidth='sm'
      //     >
      //       <AppBar title="Enter User Details" />
      //       <TextField
      //         placeholder="Enter Your First Name"
      //         label="First Name"
      //         onChange={handleChange('firstName')}
      //         defaultValue={values.firstName}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <TextField
      //         placeholder="Enter Your Last Name"
      //         label="Last Name"
      //         onChange={handleChange('lastName')}
      //         defaultValue={values.lastName}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <TextField
      //         placeholder="Enter Your Email"
      //         label="Email"
      //         onChange={handleChange('email')}
      //         defaultValue={values.email}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <Button
      //         color="primary"
      //         variant="contained"
      //         onClick={this.continue}
      //       >Continue</Button>
      //     </Dialog>
      //   </>
      // </MuiThemeProvider>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel id="work-sector">Work Sector</InputLabel>
          <Select labelId="work-sector" id="work-select" fullWidth>
            <MenuItem value="1">Health care and social assistance</MenuItem>
            <MenuItem value="2">Educational services</MenuItem>
            <MenuItem value="3">Accommodation and food services</MenuItem>
            <MenuItem value="4">Finance and insurance, real estate, rental, and leasing</MenuItem>
            <MenuItem value="5">Manufacturing</MenuItem>
            <MenuItem value="6">Wholesale trade, retail trade</MenuItem>
            <MenuItem value="7">Professional, scientific, and technology services</MenuItem>
            <MenuItem value="8">Other</MenuItem>
          </Select>
        </Grid>
      </Grid>
    );
  }
}

export default FirstForm;