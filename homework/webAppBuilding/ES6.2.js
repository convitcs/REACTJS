const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')
const { of } = require('rxjs')
var action
let animals = ["cat", "dog", "duck", "chicken", "fish"]  
let list  = new Set(animals)
let question = [{
    type: "checkbox",
    message: "Choose what to do(only one pls)",
    name: "action",
    choices: [
        {
            name: "check animal",
        },
        {
            name: "add animal",
        },
        {
            name: "delete animal",
        },
        {
            name: "print the list",
        },
    ],
}]

inquirer.prompt(question)
.then((answers) => {
    action=answers
    // action = JSON.stringify(answers, null, '  ');
    // console.log(JSON.stringify(answers, null, '  '));
    console.log(action.action[0])
    action.action.forEach(element => {
        switch (element) {
            case "check animal":
                inquirer.prompt([{type: 'input', name:'animalName', message:'Nhập động vật muốn kiểm tra:'}])
                .then(answers => {
                    if(list.has(answers.animalName)){
                        console.log("đã tồn tại "+answers.animalName+" trong danh sách")
                    }
                })
                break;
            case "add animal":
                inquirer.prompt([{type: 'input', name:'animalName', message:'Nhập tên động vật muốn thêm'}])
                .then(answers => {
                    list.add(answers.animalName)
                    console.log(list)
                })
            break;
            case "delete animal":
                inquirer.prompt([{type: 'input', name:'animalName', message:'Nhập tên động vật muốn xóa'}])
                .then(answers => {
                    list.delete(answers.animalName)
                    console.log(list)
                })
                break;
            case "print the list":
                inquirer.prompt([{type: 'input', name:'animalName', message:'insert animal.name'}])
                .then(answers => {
                    
                        console.log(list)
                    
                })
                break;
    }
    })
}) 

