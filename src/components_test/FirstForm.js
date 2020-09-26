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
import Typography from '@material-ui/core/Typography';

export class FirstForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // const [workValue, setWorkValue] = useState('0');

    const { values, handleChange } = this.props;
    return (
<React.Fragment>
      <Typography variant="h4" gutterBottom>
        Demographic Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel id="work-sector">Work Sector</InputLabel>
          <Select labelId="work-sector" id="work-select">
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
        <Grid item xs={12} sm={6}>
          <InputLabel id="age">Age</InputLabel>
          <TextField
            required
            labelId="age"
            name="age"
            fullWidth
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="gender">Gender</InputLabel>
          <Select labelId="gender" id="gender-select" fullWidth>
            <MenuItem value="1">Male</MenuItem>
            <MenuItem value="2">Female</MenuItem>
            <MenuItem value="3">Other</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="race">Race</InputLabel>
          <Select labelId="race" id="race-select" fullWidth>
            <MenuItem value="1">White</MenuItem>
            <MenuItem value="2">Arab</MenuItem>
            <MenuItem value="3">Filipino</MenuItem>
            <MenuItem value="4">Chinese</MenuItem>
            <MenuItem value="5">Black</MenuItem>
            <MenuItem value="6">Other</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
    </React.Fragment>
    );
  }
}

export default FirstForm;