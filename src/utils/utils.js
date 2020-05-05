import axios from 'axios';

export const fetchLocationData = async (search) => {
  try {
    let results = [];
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${process.env.REACT_APP_GOOGLE_KEY}`);
    const resGoogle = res.data.results[0];
    const resRiseSet = await translateData(resGoogle);

    results.push(resGoogle, resRiseSet);
    return results;
  } catch (err) {
    return console.log('err ******------>>>>>>', err);
  }
};

const translateData = (data) => {
  let results = {};
  const lat = data.geometry.location.lat;
  const lng = data.geometry.location.lng;

  results['lat'] = lat;
  results['lng'] = lng;

  return getRiseSetTime(results);
};

const getRiseSetTime = async (geoData) => {
  try {
    const res = await axios.get(`https://api.sunrise-sunset.org/json?lat=${geoData.lat}&lng=${geoData.lng}&formatted=0`);
    const results = res.data.results;
    return results;
  } catch (err) {
    return console.log('err ******------>>>>>>', err);
  }
};
