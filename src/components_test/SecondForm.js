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

export class SecondForm extends Component {
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
        <div className="container mt-2">
          <Typography variant="h4" gutterBottom>
            Precautions and Test Results
          </Typography>
          <Typography variant="h5" gutterBottom>
            1. In the past 14 days, have you:
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.q1_1}
                onChange={handleChange('q1_1')}
              />
              <p style={{display: "inline"}}>provided care to someone diagnosed with COVID-19</p>
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.q1_2}
                onChange={handleChange('q1_2')}
              />
              <p style={{display: "inline"}}>learned that  a close contact has received a positive COVID-19 test</p>
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.q1_3}
                onChange={handleChange('q1_3')}
              />
              <p style={{display: "inline"}}>been in contact with a known carrier of COVID-19</p>
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.q1_4}
                onChange={handleChange('q1_4')}
              />
              <p style={{display: "inline"}}>engaged in any travel outside of Windsor-Essex</p>
            </Grid>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.q1_5}
                onChange={handleChange('q1_5')}
              />
              <p style={{display: "inline"}}>congregated in groups of 15 or more people</p>
            </Grid>
            <Typography variant="h5" gutterBottom>
              2. Covid-19 PCR Test (Nasal swab):
            </Typography>
            <Grid item xs={12}>
              <Checkbox
                color="primary"
                checked={values.hasTested}
                onChange={handleChange('hasTested')}
              />
              <p style={{display: "inline"}}>Have you been tested for Covid-19 using a PCR Test (nasal swab)?</p>
            </Grid>

            {values.hasTested && 
            <Grid item xs={12}>
              <InputLabel id="test-status">Please indicate your test results</InputLabel>
              <Select
                labelId="test-status"
                id="status-select"
                fullWidth
                onChange={handleChange('testResult')}
                value={values.testResult}
              >
                <MenuItem value="Positive">Positive</MenuItem>
                <MenuItem value="Negative">Negative</MenuItem>
                <MenuItem value="I haven't received results">I haven't received results</MenuItem>
              </Select>
            </Grid>}
            {values.hasTested && 
            <Grid item xs={12} sm={6}>
              <form noValidate>
                <TextField
                  id="date"
                  label="Test Date"
                  type="date"
                  onChange={handleChange('testDate')}
                  defaultValue={values.testDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>}
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

export default SecondForm;