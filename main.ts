/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen
 * Created on: Oct 2024
 * This program stops and backs up
*/

// variables
let distanceToObject: number

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)


// make the wheel to move
while (true) {
    robotbit.StpCarMove(10, 48)

    // checking the distance
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // stops when it's close to something
    if (distanceToObject <= 10) {

     robotbit.StpCarMove(0, 48)
     basic.pause(500)
     robotbit.StpCarMove(-10, 48)
     basic.pause(500)
     robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
     robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
    }


}