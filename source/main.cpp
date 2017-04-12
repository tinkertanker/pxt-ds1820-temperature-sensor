#include "MicroBit.h"
#include "DS1820.h"

MicroBit uBit;
 
#define DATA_PIN        3
DS1820 probe((PinName)DATA_PIN);
 
int main() {
  uBit.init();
    while(1) {
        probe.convertTemperature(true, DS1820::all_devices);         //Start temperature conversion, wait until ready
        //uBit.serial.printf("It is %3.1foC\r\n", probe.temperature());
        uBit.serial.printf("It is %doC\r\n", (int)probe.temperature());
        wait(1);
    }
}
