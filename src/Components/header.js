// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { searchZipCode } from '../utils/utils';

const Header = () => {
  const [search, setLocation] = useState('');
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await searchZipCode(search);
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
        value={search}
        onChange={(event) => handleChange(event)}
      />
      <Button className='btn' size='small' variant='outlined' color='primary' onClick={handleSubmit}>
        <SearchIcon /> Search
      </Button>
    </div>
  );
};

export default Header;
