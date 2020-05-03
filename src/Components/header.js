// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { searchZipCode } from '../utils/utils';

export default function Header() {
  const [values, setValues] = useState({ locationSearch: '' });
  const [data, setData] = useState(null);

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const submit = values.locationSearch;
      const result = await searchZipCode(submit);
      console.log('result ******------>>>>>>', result);

      return setData(result);
    } catch (err) {
      console.log('err ******------>>>>>>', err);
    }
  };

  return (
    <div className='header-content'>
      <TextField
        id='standard-number'
        label='Location'
        type='text'
        InputLabelProps={{
          shrink: true,
        }}
        value={values.locationSearch}
        onChange={handleChange('locationSearch')}
      />
      <Button className='btn' size='small' variant='outlined' color='primary' onClick={handleSubmit}>
        <SearchIcon /> Search
      </Button>
      {data ? (
        <div>
          Location: {data[0].formatted_address}
          <div>Sunrise: {new Date(data[1].sunrise).toLocaleTimeString()}</div> <div>Sunset: {new Date(data[1].sunset).toLocaleTimeString()}</div>
        </div>
      ) : null}
    </div>
  );
}
