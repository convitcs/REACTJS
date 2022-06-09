// // const readline = require('readline').createInterface({
// //     input: process.stdin,
// //     output: process.stdout,
// //   });
  
// //   readline.question(`What's your name?`, name => {
// //     console.log(`Hi ${name}!`);
// //     readline.close();
// //   });
const inquirer = require('inquirer');

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });

/**
 * Checkbox list examples
 */


 inquirer
   .prompt([
     {
       type: 'checkbox',
       message: 'Select toppings',
       name: 'toppings',
       choices: [
         new inquirer.Separator(' = The Meats = '),
         {
           name: 'Pepperoni',
         },
         {
           name: 'Ham',
         },
         {
           name: 'Ground Meat',
         },
         {
           name: 'Bacon',
         },
         new inquirer.Separator(' = The Cheeses = '),
         {
           name: 'Mozzarella',
           checked: true,
         },
         {
           name: 'Cheddar',
         },
         {
           name: 'Parmesan',
         },
         new inquirer.Separator(' = The usual ='),
         {
           name: 'Mushroom',
         },
         {
           name: 'Tomato',
         },
         new inquirer.Separator(' = The extras = '),
         {
           name: 'Pineapple',
         },
         {
           name: 'Olives',
           disabled: 'out of stock',
         },
         {
           name: 'Extra cheese',
         },
       ],
       validate(answer) {
         if (answer.length < 1) {
           return 'You must choose at least one topping.';
         }
         return true;
       },
     },
   ])
   .then((answers) => {
     console.log(JSON.stringify(answers, null, '  '));
   });


   console.log("aaaaaaa")