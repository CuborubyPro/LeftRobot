radio.onReceivedValue(function (name, value) {
    if (name == "RLL") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value)
    } else if (name == "RLR") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value)
    } else if (name == "RLLb") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, value)
    } else if (name == "RLRb") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, value)
    }
})
let RLD = 0
let RLTr = 0
let RLTl = 0
radio.setGroup(55)
basic.forever(function () {
    RLTl = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    RLTr = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    RLD = maqueen.Ultrasonic(PingUnit.Centimeters)
    radio.sendValue("RLTl", RLTl)
    radio.sendValue("RLTr", RLTr)
    radio.sendValue("RLD", RLD)
    basic.pause(50)
})
