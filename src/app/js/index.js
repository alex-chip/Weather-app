// Import StyleSheet
// require('../css/index.css')
// require('../css/bootstrap.min.css')
require('../scss/index.scss')

const { Weather } = require('./modules/weather')
const { UI } = require('./modules/UI')
const { Store } = require('./modules/Store')

const store = new Store()
const { city, countryCode } = store.getLocationData()

const ui = new UI()
const weather = new Weather(city, countryCode)

const fetchWeather = async () => {
  const data = await weather.getWeather()
  console.log(data)
  ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', e => {
  e.preventDefault()
  const city = document.getElementById('city').value
  const countryCode = document.getElementById('countryCode').value
  weather.changeLocation(city, countryCode)
  fetchWeather()

  store.setLocationData(city, countryCode)
})

document.addEventListener('DOMContentLoaded', fetchWeather)
