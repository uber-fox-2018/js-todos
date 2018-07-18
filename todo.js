const Controller = require('./controller2.js');

let controller = new Controller();
let argv = process.argv;
const command = argv[2];
const input = argv[3];
const tag = argv.slice(4);

if (command == undefined || command == 'help') {
    controller.helpMenu();
} else if (command == 'list') {
    controller.printList();
} else if (command == 'add') {
    controller.addToList(input);
} else if (command == 'findById') {
    controller.findById(input);
} else if (command == 'delete') {
    controller.delete(input);
} else if (command == 'complete') {
    controller.completeTask(input);
} else if (command == 'uncomplete') {
    controller.uncompleteTask(input);
} else if (command == 'list:created') {
    controller.sortCreated(input);
} else if (command == 'list:completed') {
    controller.sortCompleted(input);
} else if (command == 'tag') {
    controller.addTag(input, tag);
} else if (command == 'filter') {
    controller.filter(input);
}