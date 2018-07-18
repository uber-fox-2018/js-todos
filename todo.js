const Controller = require('./controller');
const command = process.argv[2];
const input = process.argv[3];

Controller.do(command, input);
