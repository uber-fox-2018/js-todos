const Model = require('./model.js');
const View = require('./view.js');

class Controller {
    constructor() {
        this.model = new Model();
    }

    helpMenu() {
        View.displayHelp();
    }

    printList(){
        this.model.readData()
        if (this.model.data.length !== 0){
            View.displayList(this.model.data)
        }else {
            View.displayListError()
        }
    }

    inputList(param_inputList){
        if (this.model.addList(param_inputList) === true){
            View.displaySuccessAddList()
        }else {
            View.displayErrorAddList()
        }
    }

    findById(param_findById){
        this.model.readData()
        View.displayById(this.model.findById(param_findById))
    }

    delete(param_delete){
        View.delete(this.model.delete(param_delete))
    }

    complete(param_changeToComplete){
        View.complete(this.model.complete(param_changeToComplete))
    }

    uncomplete(param_changeToUncomplete){
        View.uncomplete(this.model.uncomplete(param_changeToUncomplete))
    }

    sortDate(param_sortDate){
        let sorting = this.model.sortDate(param_sortDate)
        
        if (sorting == undefined){
            View.displayListError()
        }else {
            this.model.sortDate(sorting)
            View.displayList(sorting)
        }
    }

    sortCompleted(){
        let sorting = this.model.sortCompleted()
        
        if (sorting == false){
            View.displayListError()
        }else {
            View.sortCompleted(sorting)
        }
    }

    addTag(param_1, param_2){
        View.showAddTag(this.model.addTag(param_1, param_2))
    }

    filter(param_filter){
        View.showFilter(this.model.filter(param_filter))
    }
}
module.exports = Controller