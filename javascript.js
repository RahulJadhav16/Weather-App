






const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fb252a164mshfc91a499b4fda0ap14f54fjsn849a5c16819b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{

	cityName.innerHTML=city
	cityName2.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
    
	.then(response =>{
	console.log(response)
	cloud_pct.innerHTML=response.cloud_pct
	feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity
	max_temp.innerHTML=response.max_temp
	min_temp.innerHTML=response.min_temp
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset
    temp.innerHTML=response.temp
	wind_speed.innerHTML=response.wind_speed
	wind_speed2.innerHTML=response.wind_speed
	humidity2.innerHTML=response.humidity
	temp2.innerHTML=response.temp
	let tm=response.temp
	if(tm<0)
	{
		tmp.innerHTML="🥶"
	}

	else if(tm>0 && tm<5)
	{
		tmp.innerHTML="🥶 Ice melts and water freezes"
	}
	else if(tm>5 && tm<10)
	{
		tmp.innerHTML="❄️ A typical day in winter"
	}
	else if(tm>10 && tm<15)
	{
		tmp.innerHTML="♨️ A warm winter day or a cool summer day"
	}
	else if(tm>15 && tm<20)
	{
		tmp.innerHTML="🌞 A nice warm day"
	}
	else if(tm>20 && tm<25)
	{
		tmp.innerHTML="☀️ A hot summer’s day"
	}
	else if(tm>25 && tm<30)
	{
		tmp.innerHTML="🥵 A very hot summer’s day"
	}
	else if(tm>30 && tm<35)
	{
		tmp.innerHTML="🔥 A very hot summer’s day"
	}
	
	
	
	
	
	
	
	
	
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
	
    
	
}
submit.addEventListener("click", (e) => {
	e.preventDefault()

	getWeather(city.value);
	
	
}
)
mu.addEventListener("click",()=>{ getWeather("Mumbai")})
pu.addEventListener("click",()=>{ getWeather("Pune")})
ba.addEventListener("click",()=>{ getWeather("Bangalore")})
home.addEventListener("click",()=>{ getWeather("Delhi")})

getWeather("Delhi");




	
       