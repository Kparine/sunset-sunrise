// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import { SearchContext } from "../Contexts/searchContext";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
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

	const convertLocalTimeZone = (time) => {
		return moment(time).format("h:mm:ss a");
	};

	const time_convert_seconds = (time) => {
		return new Date(time * 1000).toISOString().substr(11, 8);
	};

	const percentDay = () => {
		const totalSecondsInDay = 86400;
		const secondsOfDaylight = parseInt(data[1].day_length);

		const percent =
			100 -
			Math.floor(
				((totalSecondsInDay - secondsOfDaylight) / totalSecondsInDay) * 100
			);
		return percent;
	};

	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div className="location-content">
			<Card className={classes.root} raised={true}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						{data[0].formatted_address}
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Sunrise: {convertLocalTimeZone(data[1].sunrise)}
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Sunset: {convertLocalTimeZone(data[1].sunset)}
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Amount of Daylight:
						{time_convert_seconds(data[1].day_length)} Hours
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Daylight Percent: {percentDay()}%
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default Location;
