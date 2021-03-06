class iPhone7 {
    useLightning() {
        console.log("Using lightning port");
    }
}
class GooglePixel {
    useMicroUSB() {
        console.log("Using microUSB...");
    }
}
class LightningToMicroUSBAdapter {
    constructor(iPhone) {
        this.iPhoneDevice = iPhone;
    }
    useMicroUSB() {
        console.log("Want to use micro USB, converting to Lightning");
        this.iPhoneDevice.useLightning();
    }
}
let iphone = new iPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();
