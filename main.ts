input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    basic.showNumber(5)
})
radio.setGroup(11)
