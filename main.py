blue2 = 0
green2 = 0
red2 = 0
BLUE = 0
GREEN = 0
RED = 0
item = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
# item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.set_pixel_color(0, neopixel.rgb(255, 0, 0))
# item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.set_pixel_color(1, neopixel.rgb(0, 255, 0))
# item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.set_pixel_color(2, neopixel.rgb(0, 0, 255))
# item2 = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
item.set_pixel_color(3, neopixel.rgb(128, 128, 128))
item.show()

def on_forever():
    global RED, GREEN, BLUE, red2, green2, blue2
    RED = 0
    GREEN = 0
    BLUE = 255
    red2 = 255
    green2 = 0
    blue2 = 0
    # item2.show_color(neopixel.rgb(RED, GREEN, BLUE))
    for index in range(255):
        RED += 1
        BLUE += -1
        # item.show_color(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    red2 = 0
    green2 = 255
    blue2 = 0
    # item2.show_color(neopixel.rgb(RED, GREEN, BLUE))
    for index2 in range(255):
        GREEN += 1
        RED += -1
        # item.show_color(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    red2 = 0
    green2 = 0
    blue2 = 255
    # item2.show_color(neopixel.rgb(RED, GREEN, BLUE))
    for index3 in range(255):
        BLUE += 1
        GREEN += -1
        # item.show_color(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
basic.forever(on_forever)
