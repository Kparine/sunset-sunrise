// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { searchZipCode } from '../utils/utils';
import { SearchContext } from '../Contexts/searchContext';

const Header = () => {
  const [search, setLocation] = useState('');
  const { setData } = useContext(SearchContext);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await searchZipCode(search);
      return setData(result);
    } catch (err) {
      console.log('err ******------>>>>>>', err);
    }
  };

  return (
    <div className='header-content'>
      <div>
        <h1 className='header-title'>RiseSet</h1>
      </div>
      <div className='input-item'>
        <TextField
          id='filled-basic'
          label='Location'
          type='text'
          variant='filled'
          InputLabelProps={{
            shrink: true,
          }}
          value={search}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className='btn-content'>
        <Button className='btn' size='small' variant='contained' color='primary' onClick={handleSubmit}>
          <SearchIcon /> Search
        </Button>
      </div>
    </div>
  );
};

export default Header;
