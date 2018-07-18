const argv = process.argv.slice(2)
const command = argv[0]
const input = argv[1]
const commandTag = process.argv.slice(4)
const Controller = require('./controller')
const controller = new Controller()

if(command === 'help' || command === undefined){
    controller.help()
}else if(command === 'list'){
    controller.list()
}else if(command === 'add' && input !== undefined ){
    controller.add(input)
}else if(command === 'findById' && input !== undefined){
    controller.findById(Number(input))
}else if(command === 'delete' && input !== undefined){
    controller.delete(Number(input))
}else if(command === 'complete' && input !== undefined ){
    controller.complete(Number(input))
} else if(command === 'uncomplete' && input !== undefined ){
    controller.uncomplete(Number(input))
} else if(command === 'list:created' && (input === 'asc' || input === 'desc')){
    controller.sortDate(input)
}else if(command === 'list:completed' && (input === 'asc' || input === 'desc')){
    controller.sortComplete(input)
}else if(command === 'tag' && input !== undefined && commandTag !== undefined){
    controller.addTag(Number(input),commandTag)
}else if(command.slice(0,7) === 'filter:'){
    let tag = command.slice(7)
    controller.filter(tag)
    // console.log(tag)

}

