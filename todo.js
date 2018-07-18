const Controller = require('./controller');
const command = process.argv[2];
const input = process.argv.slice(3);

let todo = new Controller();
todo.do(command, input);
