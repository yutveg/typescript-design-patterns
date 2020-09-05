// A class that hides complexity behind a single method
class Speaker {
    turnOn() {
        console.log("TV is on.");
    }
    turnOff() {
        console.log("TV is off.");
    }
    setVolume(volume) {
        this.volume = volume;
        console.log("Speaker volume is now: ", this.volume);
    }
}
class TV {
    turnOn() {
        console.log("TV is on.");
    }
    turnOff() {
        console.log("TV is off.");
    }
}
class BluRayPlayer {
    turnOn() {
        console.log("BluRay is on.");
    }
    turnOff() {
        console.log("BluRay is off.");
    }
}
class HomeTheaterFacade {
    constructor(speaker, bluray, tv) {
        this.bluray = bluray;
        this.tv = tv;
        this.speaker = speaker;
    }
    // perform some complex series of operations hidden under one method
    watchMovie() {
        this.tv.turnOn();
        this.bluray.turnOn();
        this.speaker.turnOn();
        this.speaker.setVolume(5);
    }
    endMovie() {
        this.tv.turnOff();
        this.bluray.turnOff();
        this.speaker.turnOff();
    }
}
let bluray = new BluRayPlayer();
let tv = new TV();
let speaker = new Speaker();
let homeTheater = new HomeTheaterFacade(speaker, bluray, tv);
homeTheater.watchMovie();
