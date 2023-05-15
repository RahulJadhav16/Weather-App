// Weather icons

const sun=document.getElementById("sun");
const weatherCloud=document.getElementById("weather-cloud");
const weatherSnow=document.getElementById("weather-snow");
const weatherCcloudAndSun=document.getElementById("weather-cloudAndSun");
const weatherRain=document.getElementById("weather-rain");

//MAking weather icons none 
sun.style.display='none';
weatherCloud.style.display='none';
weatherSnow.style.display='none';
weatherCcloudAndSun.style.display='none';
weatherRain.style.display='none';




const loader = document.getElementById('loader');
loader.style.display = 'none';

//Null ip warning
const warning=document.getElementById('warning');
warning.style.display='none';

//APi down warning
const warningApiDown=document.getElementById("warningApiDown");
warningApiDown.style.display='none';

//Wrong city name Warning
const warningWrongCity=document.getElementById("warningWrongCity");
warningWrongCity.style.display='none';


const message = document.getElementById('message');
searchInput = document.getElementById("city");



//Adding Wrong ciry name Warning
function checkCityName() {
    
	  setTimeout(()=>{
		warningWrongCity.style.display='none';

	  },3000)
     
    }
    
  


//Adding function that show null i/p warning
function checkInput() {
    var input = document.getElementById("city").value;
    if (input == "") {
	  warning.style.display='block';
	  setTimeout(()=>{
		warning.style.display='none';

	  },3000)
      return false;
    }
    return true;
  }

const options = {
	method: 'GET',
	headers: {
// 		'X-RapidAPI-Key': '1fb252a164mshfc91a499b4fda0ap14f54fjsn849a5c16819b',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		'X-RapidAPI-Key': '48ecbeda62msh98c7b8ef9df46f2p16ce99jsne48a01e3531a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
	sun.style.display='none';
    weatherCloud.style.display='none';
    weatherSnow.style.display='none';
    weatherCcloudAndSun.style.display='none';
    weatherRain.style.display='none';

	cityName.innerHTML=city
	cityName2.innerHTML=city

loader.style.display = 'block';
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
    
	.then(response =>{
		if (response.messages == "The API is unreachable, please contact the API provider") {
           
			warningApiDown.style.display='block';
        }

		if(response.error=="An unexpected error occured.")
		{
			warningWrongCity.style.display='block';
			checkCityName();
			getWeather("Delhi");
			return;
			
		}

		else
		{


		loader.style.display = 'none';
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
		weatherSnow.style.display='block';
	}

	else if(tm>=0 && tm<=5)
	{
		weatherSnow.style.display='block';
	}
	else if(tm>=6 && tm<=10)
	{
		weatherSnow.style.display='block';
	}
	else if(tm>=11 && tm<=15)
	{
		
		weatherCloud.style.display='block';
	}
	else if(tm>=16 && tm<=20)
	{
		weatherCloud.style.display='block';
	}
	else if(tm>=21 && tm<=25)
	{
		sun.style.display='block';
	}
	else if(tm>=26 && tm<=30)
	{
		sun.style.display='block';
	}
	else if(tm>=31)
	{
		sun.style.display='block';
	}
	
	
	
}
	
	
	
	
	
	})
	.catch(err => console.error(err));


	
	
    
	
}
//Old search box 
// submit.addEventListener("click", (e) => {
// 	e.preventDefault()

// 	getWeather(city.value);
	
	
// }
// )

searchInput.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
	  event.preventDefault(); // Prevents the default action of submitting the form
	  document.querySelector(".search-btn").click(); // Triggers the click event of the search button
	  if(checkInput())
	  {
	  getWeather(city.value);
	  }
	}
  });
mu.addEventListener("click",()=>{ getWeather("Mumbai")})
pu.addEventListener("click",()=>{ getWeather("Pune")})
ba.addEventListener("click",()=>{ getWeather("Bangalore")})
home.addEventListener("click",()=>{ getWeather("Delhi")})

getWeather("Delhi");




	
       
