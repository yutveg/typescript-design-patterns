// A class that hides complexity behind a single method
var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.turnOn = function () {
        console.log("TV is on.");
    };
    Speaker.prototype.turnOff = function () {
        console.log("TV is off.");
    };
    Speaker.prototype.setVolume = function (volume) {
        this.volume = volume;
        console.log("Speaker volume is now: ", this.volume);
    };
    return Speaker;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV is on.");
    };
    TV.prototype.turnOff = function () {
        console.log("TV is off.");
    };
    return TV;
}());
var BluRayPlayer = /** @class */ (function () {
    function BluRayPlayer() {
    }
    BluRayPlayer.prototype.turnOn = function () {
        console.log("BluRay is on.");
    };
    BluRayPlayer.prototype.turnOff = function () {
        console.log("BluRay is off.");
    };
    return BluRayPlayer;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(speaker, bluray, tv) {
        this.bluray = bluray;
        this.tv = tv;
        this.speaker = speaker;
    }
    // perform some complex series of operations hidden under one method
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.tv.turnOn();
        this.bluray.turnOn();
        this.speaker.turnOn();
        this.speaker.setVolume(5);
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.tv.turnOff();
        this.bluray.turnOff();
        this.speaker.turnOff();
    };
    return HomeTheaterFacade;
}());
var bluray = new BluRayPlayer();
var tv = new TV();
var speaker = new Speaker();
var homeTheater = new HomeTheaterFacade(speaker, bluray, tv);
homeTheater.watchMovie();
