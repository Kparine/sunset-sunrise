// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { TextField, Input } from '@material-ui/core';

export default function Header() {
  const handleChange = (e) => {
    e.preventDefault();
    return console.log('e ******------>>>>>>', e);
  };

  return (
    <div className='header'>
      <div>Hello your navbar Header</div>
      <TextField />
      <Input onChange={(e) => handleChange(e)} />
    </div>
  );
}
