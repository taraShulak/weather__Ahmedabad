// key for API weather b037727b537253aba7ac411640a94b28

//https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
// icons way =====> https://openweathermap.org/img/wn/idNumber@2x.png
/*
fetch('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=b037727b537253aba7ac411640a94b28')
  .then (function (resp) {return resp.json()})
  .then (function (data) { 
    console.log(data);    
    console.log(data.name);    
    console.log('temperature : ',Math.trunc(data.main.temp - 273));    
  })
  .catch(function() {
    console.log('error');
    
  })
*//*
fetch('https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=b037727b537253aba7ac411640a94b28')
  .then (function (resp) {return resp.json()})
  .then (function (data) { 
    console.log(data);    
    console.log(data.name);    
    console.log('temperature : ',Math.trunc(data.main.temp - 273));
    document.querySelector('.icon').innerHTML = `<img src = 
    "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
  })
  .catch(function () {console.log('errors');
  })

  /*

  fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('all ok',data);
  });
  */
  const city = document.querySelector('.header__city-name')
  const currentDate = document.querySelector('.header__date')
  const currentHours = document.querySelector('.header__hours')
  const sunrise = document.querySelector('.sunrise__time')
  const sunset = document.querySelector('.sunset__time')
  const mainTemp = document.querySelector('.main__current-temp')
  const feelTemp = document.querySelector('.temp-feel__temp')
  const clouds = document.querySelector('.clouds_text')
  const cloudsImg = document.querySelector('.clouds_icon')
  const windSpeed = document.querySelector('.wind__speed')
  const pressure = document.querySelector('.preasure__number')
  const humidity = document.querySelector('.humidity__number')
  const visibility = document.querySelector('.visibility__number')


  const dateNow = new Date()  
  console.log('dateNow ', dateNow);
  currentDate.textContent = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
  //currentDate.textContent = dateNow.toDateString('us-uk',{weekday:'long', month:'long'})
  currentHours.textContent = dateNow.toLocaleTimeString()
  const apiString = 'https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=339aa9d318ac3c51edbe0fb04064f1f4'
  fetch(apiString)
  .then (function (resp) {return resp.json()})
  .then (function (data) {
    console.log(data);  
    /*const dateNow = new Date()  
    console.log('dateNow ', dateNow);
    
    
    currentDate.textContent = dateNow.toDateString()
    currentHours.textContent = dateNow.toLocaleTimeString()
    */
    city.textContent = data.name
    const sunriseTime = new Date(data.sys.sunrise)
    const sunsetTime = new Date(data.sys.sunset)
    console.log(' difrent time ',data.sys.sunset - data.sys.sunrise);
    
    //console.log('sunrise', sunriseTime)
    sunrise.textContent = sunriseTime.toLocaleTimeString()
    sunset.textContent = sunsetTime.toLocaleTimeString()
    //sunset.textContent = data.sys.sunset.toLocaleTimeString()
    mainTemp.textContent = Math.trunc (data.main.temp - 273) < 0 ?
                        ` ${Math.trunc (data.main.temp - 273)}` :
                        `+${Math.trunc (data.main.temp - 273)}`
    feelTemp.textContent = Math.trunc (data.main.feels_like - 273) < 0 ?
                        ` ${Math.trunc (data.main.feels_like - 273)}` :
                        `+ ${Math.trunc (data.main.feels_like - 273)}`
    humidity.textContent = data.main.humidity
    pressure.textContent = Math.trunc(data.main.pressure/1.3332 )
    visibility.textContent = data.visibility
    windSpeed.textContent = data.wind.speed
    clouds.textContent = data.weather[0].description
    cloudsImg.innerHTML = `<img src = 
    "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`

  })
  .catch(function() {
    console.log('error');
    
  })

  