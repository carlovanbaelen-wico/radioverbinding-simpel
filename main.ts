radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("Ready")
    } else if (receivedNumber == 5) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
radio.setGroup(2)
radio.sendNumber(0)
basic.forever(function () {
    led.plot(0, 0)
    if (input.acceleration(Dimension.Y) < -500) {
        radio.sendNumber(2)
    }
})
