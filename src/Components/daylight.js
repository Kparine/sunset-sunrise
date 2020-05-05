// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { SearchContext } from '../Contexts/searchContext';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Daylight = () => {
  const classes = useStyles();

  const { data } = useContext(SearchContext);

  if (!Object.keys(data).length) {
    return null;
  }

  const bull = <span className={classes.bullet}>•</span>;

  const convertLocalTimeZone = (data) => {
    return moment(data).format('h:mm:ss a');
  };

  const duration = (start, end) => {
    return moment.utc(moment(end, 'HH:mm:ss').diff(moment(start, 'HH:mm:ss'))).format('hh:mm');
  };

  const percentDay = () => {
    const totalSecondsInDay = 86400;
    const secondsOfDaylight = parseInt(data[1].day_length);

    const percent = Math.floor(((totalSecondsInDay - secondsOfDaylight) / totalSecondsInDay) * 100);
    return percent;
  };

  return (
    <div className='location-content'>
      <Card className={classes.root} raised={true}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            Day/Night Length
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Night - Begin: {convertLocalTimeZone(data[1].astronomical_twilight_end)}, End: {convertLocalTimeZone(data[1].astronomical_twilight_begin)}, Duration:
            {duration(data[1].astronomical_twilight_end, data[1].astronomical_twilight_begin)}
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Astronomical Twilight - Begin: {convertLocalTimeZone(data[1].astronomical_twilight_begin)}, End: {convertLocalTimeZone(data[1].astronomical_twilight_end)}
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Nautical Twilight - Begin: {convertLocalTimeZone(data[1].nautical_twilight_begin)}, End: {convertLocalTimeZone(data[1].nautical_twilight_end)}
          </Typography>
          <Typography variant='body2' component='p'>
            {bull} Civil Twilight - Begin: {convertLocalTimeZone(data[1].civil_twilight_begin)}, End: {convertLocalTimeZone(data[1].civil_twilight_end)}
          </Typography>
        </CardContent>
      </Card>

      {/* Turn LightBar Into Separate Component */}
      <div className='lightbar-content'>
        <div className='lightbar-item night' style={{ width: `${percentDay()}%`, backgroundImage: `linear-gradient(90deg, #020024 0%, #090979 ${percentDay() + 10}%, #00d4ff 100%)` }}>
          <div className='lightbar-title'>Night {`${percentDay()}%`}</div>
        </div>
        <div className='lightbar-item day' style={{ width: `${100 - percentDay()}%`, marginLeft: `${percentDay()}%`, backgroundImage: `linear-gradient(270deg, #020024 20%, #090979 ${percentDay()}%, #00d4ff 100%)` }}>
          <div className='lightbar-title' style={{ marginLeft: `30px`, color: `#000` }}>
            Daylight {`${100 - percentDay()}%`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daylight;
