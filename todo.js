const controller = require('./controller');
const argv = process.argv.slice(2);
const command = argv[0];

const fs = require('fs');
const data = fs.readFileSync('data.json', 'utf8');
const objData = JSON.parse(data)
const callController = new controller(objData);


// const writeData = fs.writeFileSync()

if(!command) {
  console.log(`please type 'node todo.js hel' to guide`);
} 
else if(command === 'help') {
  callController.help()  ;
}
else if(command === 'list') {
  callController.listTodo()
}
else if(command === 'add') {
  const addTask = argv[1];
  callController.save(addTask);
}

