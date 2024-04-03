#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 23465;
let myBalance = 200000;
let accountType = await inquirer.prompt([
    {
        message: "please select your account",
        name: "accountName",
        type: "list",
        choices: ["saving account", "current account"],
    },
]);
let pinAnswer = await inquirer.prompt([
    { message: "enter your pin", name: "pin", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            message: "please select the option",
            name: "operation",
            type: "list",
            choices: ["withdrawl", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                message: "enter your amount",
                name: "amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Now your balance is ${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else {
        let fastCash = await inquirer.prompt([
            {
                message: "enter your amount you want to withdraw",
                name: "fastcash",
                type: "list",
                choices: ["5000", "2000", "3000"]
            }
        ]);
        if (myBalance >= fastCash.fastcash) {
            myBalance -= fastCash.fastcash;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
}
else {
    console.log("incorrect pincode");
}
