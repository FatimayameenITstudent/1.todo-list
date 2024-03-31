import inquirer from"inquirer" ;
import chalk from"chalk" ;

let todoList = [] ;
let condition = true ;

console.log(chalk.magenta("\n \t Wellcome to Fatima - todo-list application\n"));

while(condition){
  let addtask = await inquirer.prompt(
    [
        {
            name: 'task',
            type: 'input',
            message:'enter your new task'
        }
    ]
  );
  todoList.push(addtask.task);
  console.log(`${addtask.task} task added in todo-list sucessfully`);

  let addmoretask = await inquirer.prompt(
    [
        {
            name: 'addmore',
            type: 'confirm',
            message:'do you want to add more task ?',
            default: 'false'
        }
    ]
  );

  condition = addmoretask.addmore
};
console.log("Your updated todo-List :" , todoList);

