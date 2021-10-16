
class Weather {
    constructor(city, country) {
      this.apiKey = "e71c2b2a7d6700a136b1ccc4cb362cc1";
      this.city = city;
      this.country = country;
    }
  

    async getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
          this.country
        }&units=metric&APPID=${this.apiKey}`
      );
  
      const responseData = await response.json();
  
      return responseData;
    }
  
  
    changeLocation(city, country) {
      this.city = city;
      this.country = country;
    }
  }