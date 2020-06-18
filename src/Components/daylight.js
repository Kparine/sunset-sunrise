// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { SearchContext } from "../Contexts/searchContext";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment-timezone";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(1)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const DayLight = () => {
	const classes = useStyles();

	const { data } = useContext(SearchContext);
	// console.log("data ******------>>>>>>", data);

	if (!Object.keys(data).length) {
		return null;
	}

	const bull = <span className={classes.bullet}>•</span>;

	const convertLocalTimeZone = (time) => {
		const zone = data[2].timezoneID;
		return moment.tz(time, zone).format("hh:mm a");
	};

	const duration = (start, end) => {
		return moment
			.utc(moment(end, "HH:mm:ss").diff(moment(start, "HH:mm:ss")))
			.format("hh:mm");
	};

	return (
		<div className="location-content">
			<Card className={classes.root} raised={true}>
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						Day/Night Length
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Night - Begin:{" "}
						{convertLocalTimeZone(data[1].astronomical_twilight_end)}, End:{" "}
						{convertLocalTimeZone(data[1].astronomical_twilight_begin)},
						Duration:
						{duration(
							data[1].astronomical_twilight_end,
							data[1].astronomical_twilight_begin
						)}
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Astronomical Twilight - Begin:{" "}
						{convertLocalTimeZone(data[1].astronomical_twilight_begin)}, End:{" "}
						{convertLocalTimeZone(data[1].astronomical_twilight_end)}
					</Typography>
					<Typography variant="body2" component="p">
						{bull} Nautical Twilight - Begin:{" "}
						{convertLocalTimeZone(data[1].sunrise, data[2])}
					</Typography>
					{/* <Typography variant="body2" component="p">
						{bull} Civil Twilight - Begin:{" "}
						{convertLocalTimeZone(data[1].civil_twilight_begin)}, End:{" "}
						{convertLocalTimeZone(data[1].civil_twilight_end)}
					</Typography> */}
				</CardContent>
			</Card>
		</div>
	);
};

export default DayLight;
