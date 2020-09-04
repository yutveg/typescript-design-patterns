var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLightning = function () {
        console.log("Using lightning port");
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log("Using microUSB...");
    };
    return GooglePixel;
}());
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iPhone) {
        this.iPhoneDevice = iPhone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log("Want to use micro USB, converting to Lightning");
        this.iPhoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
var iphone = new iPhone7();
var chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();
