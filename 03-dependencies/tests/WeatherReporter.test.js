import { WeatherReporter } from '../WeatherReporter.js';

describe('WeatherReporter', () => {
  let weatherReporter;
  let weatherServiceStub;

  beforeEach(() => {
    weatherServiceStub = {
      getWeather: jest.fn().mockResolvedValue({ temp: 20 }),
    };

    weatherReporter = new WeatherReporter(weatherServiceStub);
  });

  describe('getReport', () => {
    it('should format weather report normally', async () => {
    });

    it('should report when it is hot', async () => {
    });

    it('should report when it is cold', async () => {
    });

    it('should work with multiple cities', async () => {
    });
  });

  describe('getMultipleReports', () => {
    it('should get reports for multiple cities', async () => {
    });

    it('should handle empty array', async () => {
    });
  });
});
