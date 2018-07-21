const Controller = require('./controller.js')
const View = require('./view.js');


var commandArgv = process.argv;
var command = commandArgv[2]
var value = commandArgv[3]

var arrTag = [];

for(let a = 0; a< commandArgv.length; a++){
    if(a > 3){
        arrTag.push(commandArgv[a])
    }
}

switch(command){
    case 'help' : {Controller.help(); break}

    case 'list' : {
                    Controller.listTask()
                    break;
                }
    
    case 'add'  : {Controller.addTask(value); break}
    case 'findById' : {Controller.findId(value);break}

    case 'delete' : {Controller.delete(value);break}
    case 'complete' : {Controller.completed(value, true);break}
    case 'uncomplete' : {Controller.completed(value, false);break}
    case 'list:create' : {Controller.sortByCreated(value);break}
    case 'list:complete' : {Controller.sortByCompleted(value);break}
    case 'list:tag' : {Controller.addTag(value, arrTag);break}
    case 'filter' : {Controller.findTag(value);break}
    
}


 

