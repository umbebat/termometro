let tenmpF = 0
let temp = 0
let um = ""
let testovis = ""
let tempK = 0
input.onButtonPressed(Button.A, function () {
    tenmpF = Math.round(temp * 1.8 + 32)
    um = " F"
    testovis = "" + convertToText(tenmpF) + um
    basic.showString(testovis)
})
input.onButtonPressed(Button.B, function () {
    tempK = Math.round(temp - 27315)
    um = " K"
    testovis = "" + convertToText(tenmpF) + um
    basic.showString(testovis)
})
basic.forever(function () {
    temp = input.temperature()
    um = "°C"
    testovis = "" + convertToText(temp) + um
    basic.showString(testovis)
})
