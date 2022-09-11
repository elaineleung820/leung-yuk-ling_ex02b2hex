radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -128, -42, 0, 9),
    9
    )
})
let signal = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
