#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n WELCOME TO CURRENCY CONVERTER \n"));
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    INR: 83.61,
    AFG: 71.307,
    PKR: 277.95,
    BNG: 109.69
};
let user_answer = await inquirer.prompt([{
        name: 'from',
        message: chalk.yellow("Enter from currency"),
        type: 'list',
        choices: ['USD', 'EUR', 'INR', 'AFG', 'PKR', 'BNG']
    },
    {
        name: 'to',
        message: chalk.red("Enter to currency"),
        type: 'list',
        choices: ['USD', 'EUR', 'INR', 'AFG', 'PKR', 'BNG']
    },
    {
        name: 'amount',
        message: chalk.green("Enter your amount"),
        type: 'number',
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellowBright(convertedAmount));
