const Controller=require("./controller.js")

let command= process.argv[2]
let task= process.argv[3]
let id= process.argv[3]

if(command === 'help') {
	Controller.help()
}
else if(command === 'list') {
	Controller.list()
}
else if(command==='add' && task!==undefined) {
	Controller.addTask(task)
}
else if(command === 'findById' && id!== undefined){
	Controller.findById(id)
}
else if(command === 'delete' && id!== undefined){
	Controller.deleteId(id)
}
else if(command === 'complete' && id!== undefined){
	Controller.complete(id)
}
else if(command === 'uncomplete' && id!== undefined){
	Controller.uncomplete(id)
}
else {
	Controller.help()	
}



