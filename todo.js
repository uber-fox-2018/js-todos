
let Control = require('./control.js')
let control = new Control()




let input = process.argv[2]


if (input == 'help') {
    control.help()
}
else if (input == 'list') {
    control.list()
}
else if (input == 'add') {
    let add = process.argv[3]
    control.add(add)
}
else if (input == 'findById') {
    let id = process.argv[3]
    control.findById(id)
}
else if (input =='delete'){
    let Id_delete = process.argv[3]
    control.delete(Id_delete)
}
else if (input =='complete'){
    let Id_complete = process.argv[3]
    control.complete(Id_complete)
}
else if (input =='uncomplete'){
    let Id_uncomplete = process.argv[3]
    control.uncomplete(Id_uncomplete)
}