import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function FirstForm() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Demographic Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            required
            id="work-sector"
            name="work-sector"
            label="First name"
            fullWidth
            autoComplete="given-name"
          /> */}
          <InputLabel id="work-sector">Work Sector</InputLabel>
          <Select labelId="work-sector" id="select" fullWidth>
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
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="Age"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
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