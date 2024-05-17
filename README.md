# Реализация учебного проекта "Иерархия классов электроприборы.

## Родительский класс.
Класс **ElAppliance** (электроприборы) включает в себя основные характеристики электроприборов, а именно название, свойство **name** - название электроприбора, свойство **onnOff** - описывающая состояние включен или выключен электроприбор, переменная булевого типа  (true - электроприбор включён в розетку, false - электроприбор выключен) и свойство **powerConsum** - мощность электроприбора, и методы позволяющие эти характеристики выводить в консоль: **getInfoName()** - выводит название электроприбора в консоль; **getInfoOnnOff()** - выводит в консоль сведения выключен или включен прибор в розетку; **getInfoPowerConsum()** - выводит в консоль сведения о потребляемой мощности электроприбора.

## Дочерние классы.
В качестве примера, наследуемими классами от класса **ElAppliance** (электроприборы) были рассмотренны классы: **LightingDevice** - осветительные электроприборы и **DeviceForBoilingWater** - электроприборы для кипячения воды. Они наследуют из родительского класса свойства: **name**, **onnOff** и **powerConsum** и методы: **getInfoName()**, **getInfoOnnOff()** и **getInfoPowerConsum()**. А также имеют свои свойства и методы. 
1. Класс **LightingDevice** - свойства: **numOfLightBulbs** - колличество лампочек и **brightness** - яркость; методы: **getInfoNumOfLightBulbs()** - выводит в консоль сведение о количестве лампочек в осветительном электроприборе и **getInfoBrightness()** - выводит в консоль сведение о яркости осветительного электроприбора.
2. Класс **DeviceForBoilingWater** - свойства: **volOfHeatedWater** - максимальный объем воды для кипячения, который помещается в электроприбор и **boilTimeOfWater** - время кипячения воды электроприбором; методы: **getInfoVolOfHeatedWater()** - выводит в консоль сведение о максимальном объеме воды для кипячения и **getInfoBoilTimeOfWater()** - выводит в консоль сведение о времени, за которое электроприбор вкипятит воду.

## Объекты.
В качестве примера были созданы объекты: **floorLamp - торшер** и **electricKettle - электрочайник**, заданы им свойства и выведены сведения о них в консоль.  