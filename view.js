const Model = require('./model.js')
var files = new Model
class Display{
    constructor(){
        this.helpCommand = ['help','list','add <task_content>','findById <task_id>','delete <task_id>','complete <task_id>','uncomplete <task_id>']
    }
    displayHelp(){
        for(let i = 0 ; i < this.helpCommand.length ; i++){
            console.log('node todo.js '+this.helpCommand[i])
        }
    }
    displayList(){
        // var test = files.file[1][0].split('',3).join('')
        // console.log(test.split(' ').join('X'))
        for(let i = 1 ; i < files.file.length ; i++){
            console.log(`${i}. ${files.file[i]}`)
        }
    }
    displayAdd(){
        console.log(`you just added ${files.file[files.file.length-1]} on line ${files.file.length-1}`)
        
    }
    findById(){
        var find = process.argv.slice(3)
        if(!files.file[find]){
            console.log(`tidak ada`)
        }else{
            console.log(`${find}. ${files.file[find]}`)
        }
        
    }
    sudahComplete(){
        console.log('you just already complete this task')
    }
    sudahUncomplete(){
        console.log('you just already uncomplete this task')
    }
}
var test = new Display
// console.log(test.displayAdd())
module.exports = Display