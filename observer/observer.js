// Subject
class WeatherStation {
    constructor() {
        this.observers = [];
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
    setTemperature(temp) {
        console.log("WeatherStation: new temperature measurement: " + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
}
// Observer
class TemperatureDisplay {
    // register ourself as an observer
    constructor(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature) {
        console.log("TemperatureDisplay: I need to update my display.");
        // Logic would go here
    }
}
class Fan {
    // register ourself as an observer
    constructor(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature) {
        if (temperature > 25) {
            console.log("fan turns on");
        }
        else {
            console.log("fan turns off");
        }
    }
}
let weatherStation = new WeatherStation();
let temperatureDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(26);
