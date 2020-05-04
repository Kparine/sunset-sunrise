// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { SearchContext } from '../Contexts/searchContext';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Location = () => {
  const classes = useStyles();

  const { data } = useContext(SearchContext);

  if (!Object.keys(data).length) {
    return null;
  }
  console.log('data ******------>>>>>>', data[1]);
  console.log('data[0] ******------>>>>>>', data[0]);

  const time_convert = (num) => {
    return new Date(num * 1000).toISOString().substr(11, 8);
  };
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className='location-content'>
      <Card className={classes.root} raised={true}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            {data[0].formatted_address}
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Sunrise: {data[1].sunrise}
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Sunset: {data[1].sunset}
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Day Length: {time_convert(data[1].day_length)} Hours
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Location;
