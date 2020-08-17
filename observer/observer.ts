interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

// Subject
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notifyObservers();
  }
}

// Observer
class TemperatureDisplay implements Observer {
  private subject: Subject;

  // register ourself as an observer
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    console.log("TemperatureDisplay: I need to update my display.");
    // Logic would go here
  }
}

class Fan implements Observer {
  private subject: Subject;

  // register ourself as an observer
  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    if (temperature > 25) {
      console.log("fan turns on");
    } else {
      console.log("fan turns off");
    }
  }
}

let weatherStation = new WeatherStation();
let temperatureDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);

weatherStation.setTemperature(26);
