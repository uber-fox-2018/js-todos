const Model = require('./model2.js');
const View = require('./view.js');

class Controller {
    constructor() {
        this.model = new Model();
    }

    helpMenu() {
        View.helpMenu();
    }

    printList() {
        this.model.readData();
        if (this.model.data !== []) {
            View.showList(this.model.data);
        } else {
            View.showListError();
        }
    }

    addToList(newTask) {
        if(this.model.addToList(newTask) ===  true) {
            View.addSuccessful();
        } else {
            View.addFailed();
        }
    }

    findById(id) {
        this.model.readData();
        View.printById(this.model.findById(id));
    }

    delete(id) {
        // this.model.readData();
        View.delete(this.model.delete(id));
    }

    completeTask(id) {
        this.model.completeTask(id);
        View.completeTask(this.model.data);
    }

    uncompleteTask(id) {
        this.model.uncompleteTask(id);
        View.uncompleteTask(this.model.data);
    }

    sortCreated(created) {
        this.model.sortCreated(created);
        View.sortCreated(this.model.data);
    }

    sortCompleted(completed) {
        View.sortCompleted(this.model.sortCompleted(completed));
    }

    addTag(input, tag) {
        this.model.addTag(input, tag);
        View.addTag(this.model.data)
    }

    filter(tag) {
        View.showTags(this.model.filter(tag));
    }
}

module.exports = Controller;