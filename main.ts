input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P14, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P14, 180)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    servos.P0.stop()
})
basic.showIcon(IconNames.House)
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P14, 1)
