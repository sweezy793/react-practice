import axios from 'axios'

const API_KEY='6ca21e2ebe101dc381e4a9b0e7bca6c3';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER'

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},in`;
    const request=axios.get(url);

    return{
        type:FETCH_WEATHER,
        payload:request
    };
}