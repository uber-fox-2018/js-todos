const Controller = require('./controller.js')
const controller = new Controller()

const argv = process.argv
const execute = argv[2]
const input = argv[3]
const tag = argv.slice(4)

if (execute == 'help' || execute == undefined) {
    controller.helpMenu()
}else if (execute == 'list'){
    controller.printList()
}else if (execute == 'add'){
    controller.inputList(input)
}else if (execute == 'findById'){
    controller.findById(input)
}else if (execute == 'delete'){
    controller.delete(input)
}else if (execute == 'complete'){
    controller.complete(input)
}else if (execute == 'uncomplete'){
    controller.uncomplete(input)
}