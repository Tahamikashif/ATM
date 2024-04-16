#! usr/bin/env node
import inquirer from "inquirer";
let totalbalance = 10000;
const PinNumber = 1223;
let pinIntered = await inquirer.prompt([
    {
        name: "pin1",
        type: "number",
        message: "enter your pin code"
    }
]);
console.log(pinIntered.pin1);
if (pinIntered.pin1 == PinNumber) {
    console.log("correct pin code");
}
else {
    console.log("incorrect pin code");
}
if (pinIntered.pin1 == PinNumber) {
    let atmquestion = await inquirer.prompt([
        {
            name: 'accountType',
            type: 'list',
            message: "select your account type",
            choices: [
                "current account",
                "saving account",
            ]
        },
        {
            name: 'transMethod',
            type: 'list',
            message: 'select your transaction method',
            choices: [
                "withdraw cash",
                "fast cash"
            ]
        }
    ]);
    if (atmquestion.transMethod == "withdraw cash") {
        let cashwithdraw = await inquirer.prompt([
            {
                name: 'withdraw1',
                message: 'enter the amount you want to withdraw',
                type: 'number',
            }
        ]);
        console.log(cashwithdraw.withdraw1);
        // greatr than or equal to
        if (totalbalance >= cashwithdraw.withdraw1) {
            totalbalance -= cashwithdraw.withdraw1;
            console.log(`your remaining balance is: ${totalbalance}`);
        }
        else {
            console.log('insufficient balance ?');
        }
    }
    else {
        let fastcash = await inquirer.prompt([
            {
                name: 'fastcash2',
                type: 'list',
                message: "select the amount you want to withdraw",
                choices: [
                    "1000",
                    '3000',
                    "5000",
                    "12000",
                ]
            }
        ]);
        if (totalbalance >= fastcash.fastcash2) {
            totalbalance -= fastcash.fastcash2;
            console.log(`your remaining balance is: ${totalbalance}`);
        }
        else {
            console.log('insufficient balance');
        }
    }
}
