const Controller = require('./controller')
const argv = process.argv.slice(2)

let controller = new Controller()
let command = argv[0]
let nextCommand = argv[1]
let nextCommand2 = argv.slice(2)


if (command === 'help' || command === undefined) {
    controller.help()
} else if (command === 'list') {
    controller.list()
} else if (command === 'add') {
    controller.add(nextCommand)                            // + todo   
} else if (command === 'findById') {
    controller.find(nextCommand)                           // + id
} else if (command === 'delete') {   
    controller.deleteId(nextCommand)                       // + id
} else if (command === 'complete') {
    controller.completeId(nextCommand)                     // + id
} else if (command === 'uncomplete') {
    controller.uncompleteId(nextCommand)                   // + id
}else if (command === 'list:created'){ 
    controller.listCreated(nextCommand)                    // + asc | desc
}else if (command === 'list:'){
    controller.listCompleted(nextCommand)                  // + completed | uncompleted
}else if (command === 'tag'){
    controller.addTag(nextCommand, nextCommand2)           // + id + hobby
}

