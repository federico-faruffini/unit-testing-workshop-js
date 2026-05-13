export class WeatherService {
  async getWeather(city) {
    return await weatherApi.getWeather(city);
  }
}
