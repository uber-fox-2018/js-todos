const argv = process.argv.slice(2)
const input = argv
const Controller = require('./Controller/controllers')
const controller = new Controller()
if(input[0] === 'help') {
    controller.helpMenu()
} else if(input[0] === 'list') {
    controller.getlistToDo()
} else if(input[0] === 'add') {
    let task = input[1]
    if(task !== undefined) {
        controller.addListToDo(task)
    } else {
        controller.addListToDo()
    }
} else if(input[0] === 'findById') {
    let id = Number(input[1])
    if(id !== undefined) {
        controller.findById(id)
    } else {
        controller.findById()
    }
} else if(input[0] === 'delete') {
    let id = Number(input[1])
    if(id !== undefined) {
        controller.deleteTask(id)
    } else {
        controller.deleteTask()
    }
} else if(input[0] === 'complete') {
    let id = Number(input[1])
    if(id !== undefined) {
        controller.completedTask(id)
    } else {
        controller.completedTask()
    }
} else if(input[0] === 'uncomplete') {
    let id = Number(input[1])
    if(id !== undefined) {
        controller.uncompletedTask(id)
    } else {
        controller.uncompletedTask()
    }
}
