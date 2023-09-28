import Serieses from "../../../components/anime/Serieses";

const fetchSeries = async()=>{
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6f2b280d2emsh9498f1d1f647b05p1d7854jsna47849675c89',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

const Series = async()=>{
    const series = await fetchSeries();
    return(
        <Serieses items={series.data}/>
    )
}
export default Series;