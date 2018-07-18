const View = require('../views/view')
const Model = require('../models/model')

class Controller {
    constructor() {
        this.data = new Model()
    }

    showHelp() {
        View.showHelp()
    }

    readJson() {
        let dataJSON = this.data.readData()
        View.showOutput(dataJSON)
    }

    readData() {
        let data = this.data.listData()
        View.showOutput(data)
    }

    add(input) {
        let addData = this.data.add(input)
        View.showOutput(addData) 
    }

    findById(input) {
        let findById = this.data.findById(input)
        View.showOutput(findById)
    }

    delete(input) {
        let deleteData = this.data.delete(input)
        View.showOutput(deleteData)
    }

    complete(input) {
        let completeData = this.data.complete(input)
        View.showOutput(completeData)
    }

    uncomplete(input) {
        let uncompleteData = this.data.uncomplete(input)
        View.showOutput(uncompleteData)
    }

    listCreated(input) {
        let list_Sorted_by_Date = this.data.listCreated(input)
        View.showOutput(list_Sorted_by_Date)
    }

    listCompleted(input) {
        let completedData = this.data.listCompleted(input)
        View.showOutput(completedData)
    }

    tag(input) {
        let tagData = this.data.tag(input)
        View.showOutput(tagData)
    }

    filter(input) {
        let filterData = this.data.filter(input)
        View.showOutput(filterData)
    }
}

module.exports = Controller