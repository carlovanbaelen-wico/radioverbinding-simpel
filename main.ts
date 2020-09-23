radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showString("Ready")
    } else if (receivedNumber == 5) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showString("Left")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
radio.setGroup(2)
radio.sendNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -200) {
        radio.sendNumber(2)
    }
})
