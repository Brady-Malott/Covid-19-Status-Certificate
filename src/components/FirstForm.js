import React, { Component } from 'react';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { Typography } from '@material-ui/core';

export class FirstForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      // <MuiThemeProvider>
        <div className="container mt-2">
          <Typography variant="h4" gutterBottom>
            Demographic Info
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel id="work-sector">Work Sector</InputLabel>
              <Select
                id="work-select"
                fullWidth
                onChange={handleChange('workSector')}
                value={values.workSector}
              >
                <MenuItem value="Health care and social assistance">Health care and social assistance</MenuItem>
                <MenuItem value="Educational services">Educational services</MenuItem>
                <MenuItem value="Accommodation and food services">Accommodation and food services</MenuItem>
                <MenuItem value="Finance and insurance, real estate, rental, and leasing">Finance and insurance, real estate, rental, and leasing</MenuItem>
                <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                <MenuItem value="Wholesale trade, retail trade">Wholesale trade, retail trade</MenuItem>
                <MenuItem value="Professional, scientific, and technology services">Professional, scientific, and technology services</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="age">Age</InputLabel>
              <TextField
                required
                name="age"
                fullWidth
                type="number"
                onChange={handleChange('age')}
                defaultValue={values.age}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                id="gender-select"
                fullWidth
                onChange={handleChange('gender')}
                value={values.gender}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="race">Ethnic Background</InputLabel>
              <Select
                id="race-select"
                fullWidth
                onChange={handleChange('race')}
                value={values.race}
              >
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Arab">Arab</MenuItem>
                <MenuItem value="Filipino">Filipino</MenuItem>
                <MenuItem value="Chinese">Chinese</MenuItem>
                <MenuItem value="Black">Black</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              className="button-margin"
            >Continue</Button>
        </div>
      // </MuiThemeProvider>
    );
  }
}

export default FirstForm;