const argv = process.argv
const command = argv[2]
const input = argv.slice(3)

const Controller = require('./controllers/controller')

class Index {
    constructor() {
        this.controller = new Controller()
    }

    choose(command) {
        if (command === 'help' || command === undefined) {
            return this.controller.showHelp()    
        } else if (command === 'list') {
            return this.controller.readData()
        } else if (command === 'add') {
            return this.controller.add(input)
        } else if (command === 'findById' || command === 'findbyid') {
            return this.controller.findById(input)
        } else if (command === 'delete') {
            return this.controller.delete(input)
        } else if (command === 'complete') {
            return this.controller.complete(input)
        } else if (command === 'uncomplete') {
            return this.controller.uncomplete(input)
        } else if (command === 'list:created') {
            return this.controller.listCreated(input)
        } else if (command === 'list:completed') {
            return this.controller.listCompleted(input)
        } else if (command === 'tag') {
            return this.controller.tag(input)
        } else if (command === 'filter') {
            return this.controller.filter(input)
        }
        
        else if (command = 'readjson') {
            return this.controller.readJson()
        } 
    }
}

let menu = new Index()
menu.choose(command)