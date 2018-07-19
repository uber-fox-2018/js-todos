const Controller = require('./controller.js')
const controller = new Controller()

const argv = process.argv
const execute = argv[2]

const param3 = argv[3]
const param4 = argv.slice(4)

if (execute == 'help' || execute == undefined) {
    controller.helpMenu()
}else if (execute == 'list'){
    controller.printList()
}else if (execute == 'add'){
    controller.inputList(param3)
}else if (execute == 'findById'){
    controller.findById(param3)
}else if (execute == 'delete'){
    controller.delete(param3)
}else if (execute == 'complete'){
    controller.complete(param3)
}else if (execute == 'uncomplete'){
    controller.uncomplete(param3)
}else if (execute == 'list:created' && param3 == 'asc' || param3 == 'desc'){
    controller.sortDate(param3)
}else if (execute == 'list:completed'){
    controller.sortCompleted()
}else if (execute == 'tag' && param3 !== '' && param4 !== ''){
    controller.addTag(param3, param4)
}else if (execute.slice(0,7) == 'filter:'){
    let tag = execute.slice(7)
    controller.filter(tag)
}else {
    console.log(`Command error please type 'help' before...`)
}

// RELEASE 0:
// HELP

// RELEASE 1:
// LIST
// ADD
// FINDBYID
// DELETE
// COMPLETE
// UNCOMPLETE

// RELEASE 2:
// LIST CREATED ASC || DESC
// LIST COMPLETED
// TAG
// FILTER