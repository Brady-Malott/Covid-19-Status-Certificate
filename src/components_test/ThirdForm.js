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
    const severities = ['none', 'moderate', 'severe'];

    return (
      <MuiThemeProvider>
        <div className="container mt-2">
          <Typography variant="h4" gutterBottom>
            Symptom Info
          </Typography>
          <Typography variant="h5" gutterBottom>
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
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="I don't believe I had an episode">I don't believe I had an episode</MenuItem>
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

          {/* Below are the 11 symptom questions */}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InputLabel id="dry-cough">Dry cough</InputLabel>
              <Select
                labelId="dry-cough"
                fullWidth
                onChange={handleChange('q2_1')}
                value={values.q2_1}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
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
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="loss-taste-smell">Loss of taste or smell</InputLabel>
              <Select
                labelId="loss-taste-smell"
                fullWidth
                onChange={handleChange('q2_3')}
                value={values.q2_3}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="fatigue">Fatigue, or feeling "under the weather"</InputLabel>
              <Select
                labelId="fatigue"
                fullWidth
                onChange={handleChange('q2_4')}
                value={values.q2_4}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="chills">Having the chills</InputLabel>
              <Select
                labelId="chills"
                fullWidth
                onChange={handleChange('q2_5')}
                value={values.q2_5}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="difficulty-breathing">Difficulty breathing, wheezing, or shortness of breath</InputLabel>
              <Select
                labelId="difficulty-breathing"
                fullWidth
                onChange={handleChange('q2_6')}
                value={values.q2_6}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="headaches">Headaches</InputLabel>
              <Select
                labelId="headaches"
                fullWidth
                onChange={handleChange('q2_7')}
                value={values.q2_7}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="joint-muscle-pain">Joint / Muscle Pain</InputLabel>
              <Select
                labelId="joint-muscle-pain"
                fullWidth
                onChange={handleChange('q2_8')}
                value={values.q2_8}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="abdominal-pain">Abdominal Pain or Digestive Issues</InputLabel>
              <Select
                labelId="abdominal-pain"
                fullWidth
                onChange={handleChange('q2_9')}
                value={values.q2_9}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="sore-throat">Sore Throat</InputLabel>
              <Select
                labelId="sore-throat"
                fullWidth
                onChange={handleChange('q2_10')}
                value={values.q2_10}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="watery-eyes">Eyes runny or watery</InputLabel>
              <Select
                labelId="watery-eyes"
                fullWidth
                onChange={handleChange('q2_11')}
                value={values.q2_11}
              >
                <MenuItem value={severities[0]}>None</MenuItem>
                <MenuItem value={severities[1]}>Moderate</MenuItem>
                <MenuItem value={severities[2]}>Severe</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
            className="button-margin"
          >Back</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
            className="button-margin"
          >Continue</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ThirdForm;