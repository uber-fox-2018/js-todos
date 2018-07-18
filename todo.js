const controller = require('./controller');
const argv = process.argv.slice(2);
const command = argv[0];

const fs = require('fs');
// const data = fs.readFileSync('data.json', 'utf8');
const data = fs.readFileSync('help.txt', 'utf8');
const objData = JSON.parse(data);
const callController = new controller(objData);

if(!command) {
  console.log(`Please type 'node todo.js help' to guided`);
} 
else if(command === 'help') {
  callController.help()  ;
}
else if(command === 'list') {
  callController.listTodo()
}
else if(command === 'add') {
  let addTask = argv[1];
  callController.save(addTask);
}
else if(command === 'findById') {
  let taskId = argv[1];
  callController.search(taskId);
}
else if(command === 'delete') {
  let taskId = argv[1];
  callController.drop(taskId);
}
else if(command === 'complete') {
  let taskId = argv[1];
  callController.complete(taskId);
}
else if(command === 'uncomplete') {
  let taskId = argv[1];
  callController.uncomplete(taskId);
}
else if(command === 'status') {
  let taskStatus = argv[1];
  callController.addStatus(taskStatus);
}