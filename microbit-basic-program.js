basic.forever(function () {

    let iconHeart: boolean = true;

    input.onButtonPressed(Button.A, function () {
        if (iconHeart == true) {
            iconHeart = false;
        } else {
            iconHeart = true;
        }
    })

    while (true) {
        if (iconHeart) {
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(100)
        } else {
            basic.showIcon(IconNames.Butterfly)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
