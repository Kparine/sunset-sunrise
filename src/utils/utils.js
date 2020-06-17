import axios from "axios";

export const fetchLocationData = async (data) => {
	try {
		const results = [];
		const coord = {};

		const resGoogleLocation = await getGoogleLocation(data);

		coord["lat"] = resGoogleLocation.geometry.location.lat;
		coord["lng"] = resGoogleLocation.geometry.location.lng;

		const resTimeZone = await getTimeZone(coord);
		const resRiseSet = await getRiseSetTime(coord);

		results.push(resGoogleLocation, resRiseSet, resTimeZone);
		return results;
	} catch (err) {
		return console.log("err ******------>>>>>>", err);
	}
};

const getGoogleLocation = async (data) => {
	try {
		const res = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=${process.env.REACT_APP_GOOGLE_KEY}`
		);

		const result = res.data.results[0];
		return result;
	} catch (err) {
		console.log("err ******------>>>>>>", err);
	}
};

const getRiseSetTime = async (data) => {
	try {
		const res = await axios.get(
			`https://api.sunrise-sunset.org/json?lat=${data.lat}&lng=${data.lng}&formatted=0`
		);
		const result = res.data.results;
		return result;
	} catch (err) {
		return console.log("err ******------>>>>>>", err);
	}
};

const getTimeZone = async (data) => {
	try {
		const result = {};

		const res = await axios.get(
			`https://maps.googleapis.com/maps/api/timezone/json?location=${data.lat},${data.lng}&timestamp=1331161200&key=${process.env.REACT_APP_GOOGLE_KEY}`
		);
		result["timezoneID"] = res.data.timeZoneId;
		return result;
	} catch (err) {
		return console.log("err ******------>>>>>>", err);
	}
};
