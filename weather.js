

let temperature=document.getElementById('temperature')
let city=document.getElementById('city')
let cityName=document.getElementById('cityName')

let search=async()=>{
    if(cityName.value==""){
        alert(`enter the city name`)
    }else{
       let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`;
       let response=await fetch(url)
       let data=await response.json()
       temperature.textContent=data.main.temp
       city.textContent=`${data.name} , ${data.sys.country}`

    }
}
