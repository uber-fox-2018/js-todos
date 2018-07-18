const Model = require('./model.js');
const View = require('./view.js');

class Controller {
    constructor() {
        this.model = new Model();
    }

    printHelp() {
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
        // console.log(param_findById);
        View.displayById(this.model.findById(param_findById))
    }

    delete(param_delete){
        // console.log(param_delete);
        View.delete(this.model.delete(param_delete))
    }

    complete(param_changeToComplete){
        View.complete(this.model.complete(param_changeToComplete))
    }

    uncomplete(param_changeToUncomplete){
        View.uncomplete(this.model.uncomplete(param_changeToUncomplete))
    }






}

module.exports = Controller