interface IPhone {
  useLightning();
}

interface Android {
  useMicroUSB();
}

class iPhone7 implements IPhone {
  useLightning() {
    console.log("Using lightning port");
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Using microUSB...");
  }
}

class LightningToMicroUSBAdapter implements Android {
  iPhoneDevice: IPhone;

  constructor(iPhone: IPhone) {
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
