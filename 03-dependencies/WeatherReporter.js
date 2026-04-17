export class WeatherService {
  async getWeather(city) {
    throw new Error('Must be implemented');
  }
}

export class WeatherReporter {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  async getReport(city) {
    const weather = await this.weatherService.getWeather(city);
    
    let condition = 'Good weather';
    if (weather.temp > 30) {
      condition = 'Hot!';
    } else if (weather.temp < 0) {
      condition = 'Freezing!';
    }

    return `${city}: ${weather.temp}°C - ${condition}`;
  }

  async getMultipleReports(cities) {
    return Promise.all(cities.map(city => this.getReport(city)));
  }
}
