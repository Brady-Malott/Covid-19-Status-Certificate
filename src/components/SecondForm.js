import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function SecondForm() {

  const [hasTested, setHasTested] = React.useState(false);

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Symptom Info
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. In the past 14 days, have you:
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Checkbox
            color="primary"
          />
          <p style={{display: "inline"}}>provided care to someone diagnosed with COVID-19</p>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            color="primary"
          />
          <p style={{display: "inline"}}>learned that  a close contact has received a positive COVID-19 test</p>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            color="primary"
          />
          <p style={{display: "inline"}}>been in contact with a known carrier of COVID-19</p>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            color="primary"
          />
          <p style={{display: "inline"}}>engaged in any travel outside of Windsor-Essex</p>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            color="primary"
          />
          <p style={{display: "inline"}}>congregated in groups of 15 or more people</p>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            2. Covid-19 PCR Test (Nasal swab):
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            color="primary"
            checked={hasTested}
            onChange={() => setHasTested(!hasTested)}
          />
          <p style={{display: "inline"}}>Have you been tested for Covid-19 using a PCR Test (nasal swab)?</p>
        </Grid>

        {hasTested && 
        <Grid item xs={12}>
          <InputLabel id="test-status">Please indicate your test results</InputLabel>
          <Select labelId="test-status" id="status-select" fullWidth>
            <MenuItem value="1">Positive</MenuItem>
            <MenuItem value="2">Negative</MenuItem>
            <MenuItem value="3">I haven't received results</MenuItem>
          </Select>
        </Grid>}
        {hasTested && 
        <Grid item xs={12} sm={6}>
          <form noValidate>
            <TextField
              id="date"
              label="Test Date"
              type="date"
              defaultValue={Date.now()}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Grid>}
      </Grid>
    </React.Fragment>
  );
}