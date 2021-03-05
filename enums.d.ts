// Auto-generated. Do not edit.


    /** DS1820 Dallas 1-Wire Temperature Probe
     *
     * Example:
     * @code
     * #include "mbed.h"
     * #include "DS1820.h"
     *
     * DS1820 probe(DATA_PIN);
     *  
     * int main() {
     *     while(1) {
     *         probe.convertTemperature(true, DS1820::all_devices);         //Start temperature conversion, wait until ready
     *         printf("It is %3.1foC\r\n", probe.temperature());
     *         wait(1);
     *     }
     * }
     * @endcode
     */

    declare const enum devices {
    this_device = 0,
    }


    declare const enum Pins {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P3 = 4,
    P4 = 5,
    P5 = 17,
    P6 = 12,
    P7 = 11,
    P8 = 18,
    P9 = 10,
    P10 = 6,
    P11 = 26,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
    P16 = 16,
    P19 = 0,
    P20 = 30,
    }
declare namespace DS1820pxt {
}

// Auto-generated. Do not edit. Really.
