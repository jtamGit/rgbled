let blue2 = 0
let green2 = 0
let red2 = 0
let BLUE = 0
let GREEN = 0
let RED = 0
let item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
// item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.setPixelColor(0, neopixel.rgb(255, 0, 0))
// item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.setPixelColor(1, neopixel.rgb(0, 255, 0))
// item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.setPixelColor(2, neopixel.rgb(0, 0, 255))
// item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.setPixelColor(3, neopixel.rgb(128, 128, 128))
item.show()
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    red2 = 255
    green2 = 0
    blue2 = 0
    // item2.show_color(neopixel.rgb(RED, GREEN, BLUE))
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        // item.show_color(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    red2 = 0
    green2 = 255
    blue2 = 0
    // item2.show_color(neopixel.rgb(RED, GREEN, BLUE))
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        // item.show_color(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    red2 = 0
    green2 = 0
    blue2 = 255
    // item2.show_color(neopixel.rgb(RED, GREEN, BLUE))
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        // item.show_color(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})
