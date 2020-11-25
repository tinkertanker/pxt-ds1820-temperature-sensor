# DS1820 Temperature sensor

MakeCode for the DS1820 / DS18B20 Temperature sensor. 

## Hardware Setup

1. Connect the appropriate pins (GND, V, S) to the micro:bit.
2. Connect a resistor (10kΩ can do) across the V and S pins to pull the signal high. (The micro:bit's internal pull-up doesn't work, for some reason.)

## Blocks

1. Initialise with the `connect temperature probe` block in `on start`.
2. Get your reading from the `temperature` variable. 
3. Note that the temperature is 10x the actual temperature, in degrees celsius. 30.5°C would hence show 305. 

## Supported targets

 * for PXT/microbit
 
