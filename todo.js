const Controller = require('./controller.js')
const argv = process.argv
const command = argv[2]
const input = argv[3]
const inputTag = argv.slice(4)

class Todo {
    constructor(){
        this.todo = new Controller()
    }

    choose(){
        if (command === 'list') {
            this.todo.list()
        }else if (command === 'help') {
            this.todo.help()
        }else if (command === 'add') {
            this.todo.add(input)
        }else if (command === 'findById') {
            this.todo.find(input)
        }else if (command === 'delete') {
            this.todo.remove(input)
        }else if (command === 'complete') {
            this.todo.complete(input)
        }else if (command === 'uncomplete') {
            this.todo.uncomplete(input)
        }else if (command === 'list:created') {
            this.todo.listCreated()
        }else if (command === 'list:outstanding') {
            this.todo.listOutstanding(input)
        }else if (command === 'list:completed') {
            this.todo.listCompleted()
        }else if (command === 'tag') {
            this.todo.tag(input,inputTag)
        }else if (command === 'filter') {
            this.todo.filter(input)
        }
    }
}

let todo = new Todo()
todo.choose()