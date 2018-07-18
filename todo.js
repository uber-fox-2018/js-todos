let argv = process.argv
let data = argv[2]

console.log(data);
const Controller = require('./controller');

if (data === 'help') {
  Controller.help()
} else if (data === 'list') {
  Controller.list()
} else if (data === 'add') {
  let input = argv[0]
  Controller.add(input)
}
