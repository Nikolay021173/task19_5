function ElAppliance(name, onnOff, powerConsum) {
    this.name = name;
    this.onnOff = onnOff;
    this.powerConsum = powerConsum;
 }

 ElAppliance.prototype.getInfoName = function () { 
    console.log(`Электроприбор - ${this.name}`)
}
ElAppliance.prototype.getInfoOnnOff = function() {
    if(this.onnOff === true) {
        console.log('Электроприбор включён в розетку');
    } else {
        console.log('Электроприбор не включён в розетку');
    }
}
ElAppliance.prototype.getInfoPowerConsum = function() {
        console.log(`Потребляемая мощность ${this.powerConsum} ватт.`);
}

 function LightingDevice(name, onnOff, powerConsum, numOfLightBulbs, brightness) {
    ElAppliance.call(this, name, onnOff, powerConsum);
    this.numOfLightBulbs = numOfLightBulbs;
    this.brightness = brightness;
 }

 function DeviceForBoilingWater(name, onnOff, powerConsum, volOfHeatedWater, boilTimeOfWater) {
    ElAppliance.call(this, name, onnOff, powerConsum);
    this.volOfHeatedWater = volOfHeatedWater;
    this.boilTimeOfWater = boilTimeOfWater;
 }

 LightingDevice.prototype = Object.create(ElAppliance.prototype);
 DeviceForBoilingWater.prototype = Object.create(ElAppliance.prototype);

 LightingDevice.prototype.getInfoNumOfLightBulbs = function () {
    console.log(`Количество лампочек в приборе ${this.numOfLightBulbs} шт.`)
 }
 LightingDevice.prototype.getInfoBrightness = function() {
    console.log(`Яркость - ${this.brightness} люм.`)
}

 DeviceForBoilingWater.prototype.getInfoVolOfHeatedWater = function () {
    console.log(`Максимальный объём воды для нагрева ${this.volOfHeatedWater} л.`)
}
DeviceForBoilingWater.prototype.getInfoBoilTimeOfWater = function () {
    console.log(`Максимальный объём воды для нагрева ${this.boilTimeOfWater} мин.`)
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















/*ElAppliance.prototype.getOnnOff = function(onnOff) {
    if(onnOff === true) {
        console.log('Электроприбор включён в розетку');
    } else {
        console.log('Электроприбор не включён в розетку');
    }
}

ElAppliance.prototype.getPowerConsum = function(powerConsum) {
        console.log(`Потребляемая мощность ${powerConsum} ватт.`);
}

function LightingDevice(name, numOfLightBulbs) {
    this.name = name;
    this.numOfLightBulbs = numOfLightBulbs;
    this.getName = function() {
        console.log(`Электроприбор - ${name}.`)
    }
    this.getNumOfLightBulbs = function() {
        console.log(`Количество лампочек в приборе ${numOfLightBulbs} шт.`)
    }
}

LightingDevice.prototype = new ElAppliance();

LightingDevice.prototype.getOnnOff = function(onnOff) {
    if(onnOff === true) {
        console.log('Электроприбор включён в розетку');
    } else {
        console.log('Электроприбор не включён в розетку');
    }
}

LightingDevice.prototype.getPowerConsum = function(powerConsum) {
    console.log(`Потребляемая мощность ${powerConsum} ватт.`);
}


function DeviceForBoilingWater(name, volOfHeatedWater) {
    this.name = name;
    this.volOfHeatedWater = volOfHeatedWater;
    this.getName = function() {
        console.log(`Электроприбор - ${name}.`)
    }
    this.getVolOfHeatedWater = function() {
        console.log(`Максимальный объём воды для нагрева ${volOfHeatedWater} л.`)
    }
}

DeviceForBoilingWater.prototype = new ElAppliance();

DeviceForBoilingWater.prototype.getOnnOff = function(onnOff) {
    if(onnOff === true) {
        console.log('Электроприбор включён в розетку');
    } else {
        console.log('Электроприбор не включён в розетку');
    }
}

DeviceForBoilingWater.prototype.getPowerConsum = function(powerConsum) {
    console.log(`Потребляемая мощность ${powerConsum} ватт.`);
}


const floorLamp = new LightingDevice('торшер', 2);
const electricKettle = new DeviceForBoilingWater('электрочайник', 2.5);
console.log(floorLamp);
console.log(electricKettle);
floorLamp.getName();
floorLamp.getNumOfLightBulbs();
floorLamp.getOnnOff(true);
floorLamp.getPowerConsum(45);
electricKettle.getName();
electricKettle.getVolOfHeatedWater();
electricKettle.getOnnOff(false);
electricKettle.getPowerConsum(120);*/

