import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class ThirdForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Bio"
              label="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog> */}

          <Typography variant="h4" gutterBottom>
            Symptom Info
          </Typography>
          <Typography variant="h6" gutterBottom>
            3. Covid-19 Episode
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.hadEpisode}
                onChange={handleChange('hadEpisode')}
              />
              <p style={{display: "inline"}}>Do you believe you have had an episode of Covid-19?</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="required-hospitalization">Did you require hospitalization for any Covid-19 Symptoms?</InputLabel>
              <Select
                labelId="required-hospitalization"
                id="status-select"
                fullWidth
                onChange={handleChange('requiredHospitalization')}
                value={values.requiredHospitalization}
              >
                <MenuItem value="1">Yes</MenuItem>
                <MenuItem value="2">No</MenuItem>
                <MenuItem value="3">I don't believe I had an episode</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="symptoms-onset">When did your Symptoms begin?</InputLabel>
              <form noValidate>
                <TextField
                  id="date"
                  type="date"
                  onChange={handleChange('symptomsDate')}
                  defaultValue={values.symptomsDate}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
          </Grid>
          <br></br>
          <Typography variant="h5" gutterBottom>
            4. Covid-19 Symptoms
          </Typography>
          <Typography variant="h6" gutterBottom>
            Please indicate the severity you experienced for each of the following symptoms.
          </Typography>    
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputLabel id="dry-cough">Dry cough</InputLabel>
              <Select
                labelId="dry-cough"
                fullWidth
                onChange={handleChange('q2_1')}
                value={values.q2_1}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="temperature">Temperature over 38 &deg;C</InputLabel>
              <Select
                labelId="temperature"
                fullWidth
                onChange={handleChange('q2_2')}
                value={values.q2_2}
              >
                <MenuItem value="1">None</MenuItem>
                <MenuItem value="2">Moderate</MenuItem>
                <MenuItem value="3">Severe</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default ThirdForm;