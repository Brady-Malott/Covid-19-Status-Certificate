import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function SecondForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Symptom Info
      </Typography>
      <Typography variant="h6" gutterBottom>
        In the past 14 days, have you:
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
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}