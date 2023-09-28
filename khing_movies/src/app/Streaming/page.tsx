import { Stream } from "stream";
import StreamCountries from "../../../components/Streaming/StreamCountries";

const fetchStrems = async () =>{
    const url = 'https://streaming-availability.p.rapidapi.com/countries';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6f2b280d2emsh9498f1d1f647b05p1d7854jsna47849675c89',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
    return data.result
} catch (error) {
	console.error(error);
}
}

const page =async () => {
    const Streams =await fetchStrems();
  return (
    <div className="divide-x col-end-5 w1/2 bg-slate-600 divide-gray-800 place-content-center">
      <StreamCountries countries={Object.values(Streams)}/>  
    </ div>
  )
}

export default page