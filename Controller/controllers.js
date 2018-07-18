const View = require('../View/views')
const Model = require('../Model/model')


class Controller {
    constructor() {
        this.model = new Model()
    }
    helpMenu() {
        View.displayMessage(`
        $ node todo.js
        $ node todo.js help
        $ node todo.js list
        $ node todo.js add <task_content>
        $ node todo.js findById <task_id>
        $ node todo.js delete <task_id>
        $ node todo.js complete <task_id>
        $ node todo.js uncomplete <task_id>
        `)
    }

    getlistToDo() {
        let listData = this.model.data
        for(let i = 0; i < listData.length; i++) {
            let list = `${listData[i].id}. [${listData[i].status}] ${listData[i].task}`
            View.displayMessage(list, null)
        }
    }

    addListToDo(task) {
        if(task) {
            let result = this.model.addList(task)
            View.displayMessage(result, null)
        } else {
            View.displayMessage(null, this.helpMenu())
        }
    }

    findById(id) {
        if(id) {
            let result = this.model.findById(id)
            View.displayMessage(result, null)
        } else {
            View.displayMessage(null, this.helpMenu())
        }
    }

    deleteTask(id) {
        if(id) {
            let result = this.model.deleteTask(id)
            View.displayMessage(result, null)
        } else {
            View.displayMessage(null, this.helpMenu())
        }
    }

    completedTask(id) {
        if(id) {
            let result = this.model.completedTask(id)
            View.displayMessage(result, null)
        } else {
            View.displayMessage(null, this.helpMenu())
        }
    }

    uncompletedTask(id) {
        if(id) {
            let result = this.model.uncompletedTask(id)
            View.displayMessage(result, null)
        } else {
            View.displayMessage(null, this.helpMenu())
        }
    }
}


module.exports = Controller