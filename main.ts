input.onButtonPressed(Button.A, function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            led.toggle(X, Y)
            basic.pause(200)
        }
    }
})
basic.forever(function () {
	
})
