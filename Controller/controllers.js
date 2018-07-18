const View = require('../View/views')
const Model = require('../Model/model')


class Controller {
    constructor() {
        this.model = new Model()
    }

    help() {
        View.displayMessage('$ node todo.js help')
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
        $ node todo.js list:created asc|desc
        $ node todo.js list:completed asc|desc
        $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
        $ node todo.js filter:<tag_name>
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

    sortTask(sort = 'asc') {
       let data = this.model.data
       let list = ''
        if(sort === 'desc') {
            data.sort((x, y) => {
                return x.created_at < y.created_at
            })
            // console.log(data);
            for(let i = 0; i < data.length; i++) {
                list = `${data[i].id}. [${data[i].status}] ${data[i].task}`
                View.displayMessage(list, null)
            }
        } else {
            for(let i = 0; i < data.length; i++) {
                list = `${data[i].id}. [${data[i].status}] ${data[i].task}`
                View.displayMessage(list, null)
            }
        }
    }

    completedSort(sort = 'asc') {
       let data = this.model.data
       let list = ''
        if(sort === 'desc') {
            data.sort((x, y) => {
                return x.completed_at < y.completed_at
            })
            // console.log(data);
            for(let i = 0; i < data.length; i++) {
                list = `${data[i].id}. [${data[i].status}] ${data[i].task}`
                View.displayMessage(list, null)
            }
        } else {
            for(let i = 0; i < data.length; i++) {
                list = `${data[i].id}. [${data[i].status}] ${data[i].task}`
                View.displayMessage(list, null)
            }
        }
    }

    addTagToList(id,arr) {
        let result = this.model.addTag(id, arr)
        console.log(result.length);
        if(result.length > 33) {
            View.displayMessage(result, null)
        } else {
            View.displayMessage(null, 'please input your tag!')
        }
    }

    filterTag(tag) {
        let result = this.model.filterTag(tag)
        for(let i = 0; i < result.length;i++) {
            let str = ''
            str += `${result[i].id}. ${result[i].task} [${result[i].tag.join(', ')}]`
            View.displayMessage(str, null)
        }
        // console.log(result);
    }
    // 2. Play with cat [hobby, pet]

}


module.exports = Controller