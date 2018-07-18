const View = require('./view')
const Model = require('./model')

class Controller{
    constructor(){
        this.model = new Model()
    }

    showMenu(){
        View.showMenu()
    }

    showList(){
        View.showList(this.model.listTugas())
    }

    addTask(newTask){
        this.model.addTask(newTask)
        View.showMessage(`added ${newTask} to your todo list`)
    }

    findById(id){
        var taskFound = this.model.findById(id) 
        if(taskFound !== undefined){
            View.showMessage(`${taskFound.id}. ${taskFound.task}`)
        }else{
            View.showMessage(`task with id : ${id} not found`)
        }
    }

    deleteById(id){
        var taskDeleted = this.model.deleteById(id)
        if(taskDeleted !== ''){
            View.showMessage(`deleted ${taskDeleted[0].task} from your todo list`)
        }else{
            View.showMessage(`task with id : ${id} not found`)
        }
    }

    complete(id){
        var compeleted = this.model.complete(id)
        if(compeleted !== ''){
            View.showList(compeleted)
        }else{
            View.showMessage(`task with id : ${id} not found`)
        }
    }

    uncomplete(id){

        var uncompeleted = this.model.uncomplete(id)

        if(uncompeleted !== ''){
            View.showList(uncompeleted)
        }else{
            View.showMessage(`task with id : ${id} not found`)
        }
    }

    sortCreated(sort){
        View.showList(this.model.sortCreated(sort))
    }

    sortCompleted(sort){
        View.showList(this.model.sortCompleted(sort))
    }

    addTag(id, tag){
        var objectTagged = this.model.addTag(id,tag)
        View.showMessage(`tagged task ${objectTagged.task} with tag ${objectTagged.tag}`)
        
    }

    filter(tag){
        var filtered = this.model.filter(tag)
        View.showMessage(`${filtered.id}. ${filtered.task} [${filtered.tag}]`)
    }


}

module.exports = Controller