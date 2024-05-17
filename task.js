class ElAppliance {

 constructor(name, onnOff, powerConsum) {
    this.name = name;
    this.onnOff = onnOff;
    this.powerConsum = powerConsum;
 }
    getInfoName() {
        console.log(`Электроприбор - ${this.name}`)
    }

    getInfoOnnOff() {
        if(this.onnOff === true) {
            console.log(`Электроприбор - включен в розетку.`);
        } else {
            console.log(`Электроприбор - выключен.`);
        }
    }

    getInfoPowerConsum() {
        console.log(`Потребляемая мощность - ${this.powerConsum} ватт.`)
    }

}

class LightingDevice extends ElAppliance {

    constructor(name, onnOff, powerConsum, numOfLightBulbs, brightness) {
        super(name, onnOff, powerConsum);
        this.numOfLightBulbs = numOfLightBulbs;
        this.brightness = brightness; 
    }

    getInfoNumOfLightBulbs() {
        console.log(`Количество лампочек - ${this.numOfLightBulbs} шт.`)
    }

    getInfoBrightness() {
        console.log(`Яркость - ${this.brightness} люм.`)
    }

}

class DeviceForBoilingWater extends ElAppliance {

    constructor(name, onnOff, powerConsum, volOfHeatedWater, boilTimeOfWater) {
        super(name, onnOff, powerConsum);
        this.volOfHeatedWater = volOfHeatedWater;
        this.boilTimeOfWater = boilTimeOfWater;
    }

    getInfoVolOfHeatedWater() {
        console.log(`Максимальный объем воды для кипячения - ${this.volOfHeatedWater} л.`)
    }

    getInfoBoilTimeOfWater() {
        console.log(`Время кипячения воды - ${this.boilTimeOfWater} мин.`)
    }

}

const floorLamp = new LightingDevice('торшер', true,  45, 3, 105);
const electricKettle = new DeviceForBoilingWater('электрочайник', false, 120, 0.8, 4);

floorLamp.getInfoName();
floorLamp.getInfoOnnOff();
floorLamp.getInfoPowerConsum();
floorLamp.getInfoNumOfLightBulbs();
floorLamp.getInfoBrightness();
console.log('------------------');
electricKettle.getInfoName();
electricKettle.getInfoOnnOff();
electricKettle.getInfoPowerConsum();
electricKettle.getInfoVolOfHeatedWater();
electricKettle.getInfoBoilTimeOfWater();