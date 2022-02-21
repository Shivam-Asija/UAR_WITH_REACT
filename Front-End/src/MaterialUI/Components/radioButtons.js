import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('Dev');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Radio Button Options</FormLabel>
      <RadioGroup aria-label="environment" name="environment" value={value} onChange={handleChange}>
        <FormControlLabel value="Dev" control={<Radio />} label="Dev" />
        <FormControlLabel value="Staging" control={<Radio />} label="Staging" />
        <FormControlLabel value="Prod" control={<Radio />} label="Prod" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  );
}