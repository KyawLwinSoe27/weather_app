//Default value is shown for Yangon
//https://api.openweathermap.org/data/2.5/weather?q=Yangon&units=metric&appid=d480a7527a878041a7f0980c501f36dc
let input = document.getElementById("input_value");
let btn = document.getElementById("btn");
let weather = {
    
    apiKey : "d480a7527a878041a7f0980c501f36dc",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather : function(data) {
        
        const { name } = data;
        const {icon, description} = data.weather[0];
        const { temp , humidity, pressure } = data.main;
        const { speed}          = data.wind;
        const {sunrise, sunset} = data.sys;
        // const {uvi}             = data.current;
        // const date = new Date(sunrise,sunset);
        //SUN RISE
        let sunrise_time = sunrise;
        let date_sunrise = new Date(sunrise * 1000);
        let hours_sunrise = date_sunrise.getHours();
        let minutes_sunrise = date_sunrise.getMinutes();
        let seconds_sunrise = date_sunrise.getSeconds();
        let SUNRISE = hours_sunrise + ":" + minutes_sunrise + ":" + seconds_sunrise;
        console.log(SUNRISE);
        
        //SUN SET
        let sunset_time = sunset;
        let date_sunset = new Date(sunset * 1000);
        let hours_sunset = date_sunset.getHours();
        let minutes_sunset = date_sunset.getMinutes();
        let seconds_sunset = date_sunset.getSeconds();
        let SUNSET = hours_sunset + ":" + minutes_sunset + ":" + seconds_sunset;
        console.log(SUNSET);
        
        document.getElementById("degree").innerHTML = `${temp}&#176;`;
        document.getElementById("place").innerHTML = name;
        document.getElementById("desc").innerHTML = description;
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/"+icon+".png"
        document.getElementById("pressure").innerHTML = pressure + "hPa";
        document.getElementById("humidity").innerHTML = humidity +"%";
        document.getElementById("wind").innerHTML = speed + "m/s";
        // document.getElementById("uv").innerHTML = uv;
        document.getElementById("sunRise").innerText = SUNRISE;
        document.getElementById("sunSet").innerText = SUNSET;
        
    }
};

btn.addEventListener("click", function(){
    console.log("Clicked");
    weather.fetchWeather(input.value);
})