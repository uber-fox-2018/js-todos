const Controller = require('./controller.js')

let controller = new Controller()
let argv = process.argv
let command = argv[2]
let input = argv[3]

if(command === 'help'){
    controller.c_help()
} else if (command === 'list'){
    controller.c_list()
} else if(command === 'add'){
    controller.c_add(input)
} else if (command === 'findById'){
    controller.c_findById(input)
} else if (command === 'delete'){
    controller.c_delete(input)
} else if( command === 'complete'){
    controller.c_complete(input)
} else if (command === 'uncomplete'){
    controller.c_uncomplete(input)
}
