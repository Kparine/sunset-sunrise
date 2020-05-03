// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { searchContext } from './Context/searchContext';

class Location extends Component {
  static contextType = searchContext;
  render() {
    console.log('this.context ******------>>>>>>', this.context);

    return <div>hello</div>;
  }
}

// const Location = (props) => {
//   const [data, setData] = useState({});
//   const { data } = useContext(searchContext);
//   console.log('props ******------>>>>>>', data);

//   return <div className='location-content'>Hello</div>;
// };

export default Location;
