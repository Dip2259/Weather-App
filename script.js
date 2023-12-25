const image = document.querySelector('.image img');
const temp_c = document.querySelector('.temp_c');
const condition = document.querySelector('.condition');
const cityName = document.querySelector('.cityName');
const region = document.querySelector('.region');
const localTime = document.querySelector('.localTime');
const uv = document.querySelector('.uv');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');
const temp_feels = document.querySelector('.temp_feels');
const wind = document.querySelector('.wind');
const airPressure = document.querySelector('.airPressure');
const windir = document.querySelector('.winddir');
const btn = document.querySelector('.btn');
const search = document.getElementById('search');

async function fetchWeather(city){
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '<Your API Key>',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let Imgsrc = result.current.condition.icon;
        Imgsrc = Imgsrc.replace("\\", '\/');
        image.src = "https:" + Imgsrc;
        temp_c.innerHTML = `${result.current.temp_c}°`;
        condition.innerHTML = `${result.current.condition.text} ${result.forecast.forecastday[0].day.mintemp_c} / ${result.forecast.forecastday[0].day.maxtemp_c}`;
        cityName.innerHTML = `${result.location.name}`;
        region.innerHTML = `${result.location.region}, ${result.location.country}`;
        localTime.innerHTML = `${result.location.localtime}`
        windir.innerHTML = `${result.current.wind_dir} Wind`;
        uv.innerHTML = `${result.current.uv}`
        humidity.innerHTML = `${result.current.humidity}%`
        visibility.innerHTML = `${result.current.vis_km} Km`
        temp_feels.innerHTML = `${result.current.feelslike_c}°`
        wind.innerHTML = `${result.current.wind_kph} Km/h`
        airPressure.innerHTML = `${result.current.pressure_mb} hpa`
    } catch (error) {
        console.error(error);
    }
}
fetchWeather("London")
btn.addEventListener('click',()=>{
    fetchWeather(search.value);
})
