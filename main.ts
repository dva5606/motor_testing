input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P14, 180)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(90)
    pins.servoWritePin(AnalogPin.P14, 90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
})
basic.showIcon(IconNames.House)
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
