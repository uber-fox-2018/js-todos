const argv = process.argv
const controller = require('./controller')
var command = argv[2]
const Controller = new controller()

if(command === undefined){
    Controller.showMenu()
}else if(command === 'help'){
    Controller.showMenu()
}else if(command === 'list'){
    Controller.showList()
}else if(command === 'add'){
    var newTask = argv[3]
    Controller.addTask(newTask)
}else if(command === 'findById'){
    var id = argv[3]
    Controller.findById(id)
}else if(command === 'delete'){
    var id = argv[3]
    Controller.deleteById(id)
}else if(command === 'complete'){
    var id = argv[3]
    Controller.complete(id)
}else if(command === 'uncomplete'){
    var id = argv[3]
    Controller.uncomplete(id)
}else if(command === 'list:created'){
    var sort = argv[3]
    Controller.sortCreated(sort)
}else if(command === 'list:completed'){
    var sort = argv[3]
    Controller.sortCompleted(sort)
}else if(command === 'tag'){
    var id = argv[3]
    var tag = argv.slice(4)
    Controller.addTag(id, tag)
}else if(command === 'filter:hobby'){
    var idx = 0
    for(var i = 0; i < command.length;i++){
        if(command[i] === ':'){
            idx = i
            break;
        }
    }

    var tag = command.slice(i+1)
    Controller.filter(tag)
}