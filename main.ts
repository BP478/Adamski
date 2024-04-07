OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("hello world")
    OLED.writeNumNewLine(10)
    OLED.newLine()
    OLED.writeNumNewLine(5)
})
