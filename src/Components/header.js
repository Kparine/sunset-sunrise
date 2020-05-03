// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Location from './location';
import { searchZipCode } from '../utils/utils';

const Header = () => {
  const [search, setLocation] = useState({ locationSearch: '' });
  const [data, setData] = useState(null);

  const handleChange = (prop) => (e) => {
    setLocation({ ...search, [prop]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const submit = search.locationSearch;
      const result = await searchZipCode(submit);
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
        value={search.locationSearch}
        onChange={handleChange('locationSearch')}
      />
      <Button className='btn' size='small' variant='outlined' color='primary' onClick={handleSubmit}>
        <SearchIcon /> Search
      </Button>
      <div className='Location-wrapper'>{data ? <Location data={data} /> : null}</div>
    </div>
  );
};

export default Header;
