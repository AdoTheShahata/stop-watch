let elapsed = 0
basic.forever(function () {
    let start = 0
    elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
