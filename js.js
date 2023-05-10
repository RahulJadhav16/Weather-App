
const loader2 = document.getElementById('loader2');
loader2.style.display = 'none';

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48ecbeda62msh98c7b8ef9df46f2p16ce99jsne48a01e3531a',
                'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

const aqi=(city)=>
{
    
    loader2.style.display = 'block';
fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+city, options1)
	.then(response => response.json())
	.then(response =>{
        loader2.style.display = 'none';
        overall_aqi.innerHTML=response.overall_aqi
        CO.innerHTML=response.CO.concentration
        NO2.innerHTML=response.NO2.concentration
        O3.innerHTML=response.O3.concentration
        PM10.innerHTML=response.PM10.concentration
        
        SO2.innerHTML=response.SO2.concentration
        let a=response.overall_aqi

        if(a>0 && a<50)
        {
            state.innerHTML="👌Good";
            des.innerHTML="Air quality is satisfactory, and air pollution poses little or no risk."

        }
        else if(a>50 && a<100)
        {
            state.innerHTML="🙂Modern";
            des.innerHTML="Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution"
        }
        else if(a>100 && a<150)
        {
            state.innerHTML="🙂Modern";
            des.innerHTML="Members of sensitive groups may experience health effects. The general public is less likely to be affected."
        }
        else if(a>150 && a<200)
        {
            state.innerHTML="😕Unhealthy";
            des.innerHTML="Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
        }
        else if(a>200 && a<300)
        {
            state.innerHTML="😣 Very Unhealthy";
            des.innerHTML="Health alert: The risk of health effects is increased for everyone."
        }
        else if(a>300)
        {
            state.innerHTML="😖 Hazardous";
            des.innerHTML="Health warning of emergency conditions: everyone is more likely to be affected."
        }
    
        
        console.log(response)})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()

	aqi(city.value);
	
	
}
)
mu.addEventListener("click",()=>{ aqi("Mumbai")})
pu.addEventListener("click",()=>{ aqi("Pune")})
ba.addEventListener("click",()=>{ aqi("Bangalore")})
home.addEventListener("click",()=>{ aqi("Delhi")})

aqi("Delhi");
