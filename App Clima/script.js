const token = `API-KEY`
const urlBase= `https://api.openweathermap.org/data/2.5/weather`

//?q=${cityName}&appid=${token}//

const diffKelvin= 273.15

document.getElementById('searchButton').addEventListener('click',() =>{
    const city= document.getElementById('cityInput').value;
    const errorMsg = document.getElementById('cityDoNotExist')
    errorMsg.textContent = '' // limpia el mensaje

    if (city){

        fetchWeather(city)
    }else{
        errorMsg.textContent = 'Por favor, ingresa una ciudad válida.'
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${token}&lang=es`)
    .then(data=>data.json())
    .then(data => showWeatherData(data))
}


function showWeatherData (data) {

    const divResponseData = document.getElementById('responseData')
    const errorMsg = document.getElementById('cityDoNotExist')
    errorMsg.textContent = '' // limpia error anterior
    divResponseData.innerHTML = ''

    const cityName= data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const weatherType = data.weather[0].description
    const icon = data.weather[0].icon


    const cityInfo= document.createElement('h2')
    cityInfo.textContent= `${cityName}, ${countryName}`

    const tempInfo= document.createElement('p')
    tempInfo.textContent = `la temperatura es de ${Math.round(temp-diffKelvin)}°C`

    const humidityInfo= document.createElement('p')
    humidityInfo.textContent = `la temperatura es de ${humidity}`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent= `la descripción meteorológica es ${weatherType}`


    divResponseData.append(cityInfo, tempInfo, humidityInfo,iconInfo,descriptionInfo)

    
}