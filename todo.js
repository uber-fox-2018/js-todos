
let control = require('./control.js')
let Control = new control()




let input = process.argv[2]


if (input == 'help') {
    Control.help()
}
else if (input == 'list') {
    Control.list()
}
else if (input == 'add') {
    let add = process.argv[3]
    Control.add(add)
}
else if (input == 'findById') {
    let id = process.argv[3]
    Control.findById(id)
}
else if (input =='delete'){
    let Id_delete = process.argv[3]
    Control.delete(Id_delete)
}
else if (input =='complete'){
    let Id_complete = process.argv[3]
    Control.complete(Id_complete)
}
else if (input =='uncomplete'){
    let Id_uncomplete = process.argv[3]
    Control.uncomplete(Id_uncomplete)
}