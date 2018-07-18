const View = require('./view')
const Model = require('./model')

class Controller {
    constructor() {
        this.model = new Model()
        this.view = new View()
    }

    help() {
        this.view.showHelp()
    }

    list() {
        let result = this.model.listData()
            this.view.showData(result)
    }

    add(nextCommand) {
        let result = this.model.addData(nextCommand)
        this.view.showAdd(result)
    }

    find(nextCommand){
        let result = this.model.findById(nextCommand)
        this.view.showFindById(result)
    }

    deleteId(nextCommand){
        let result = this.model.deleteById(nextCommand)
        this.view.showDeleteId(result)
    }

    completeId(nextCommand){
        let result = this.model.completeById(nextCommand)
        this.view.showData(result)
    }

    uncompleteId(nextCommand){
        let result = this.model.uncompleteById(nextCommand)
        this.view.showData(result)
    }

    listCreated(nextCommand){
        let result = this.model.listCreatedAll(nextCommand)
        this.view.showData(result)
    }

    listCompleted(nextCommand){
        let result = this.model.listCompletedAll(nextCommand)
        this.view.showDataCompleted(result)
    }

    addTag(nextCommand, nextCommand2){
        let result = this.model.addTagNew(nextCommand, nextCommand2)
        this.view.showTag(result)
    }
}



module.exports = Controller;