const Model = require('./model')
const View  = require('./view')

class Controller {
    constructor(){
        this.data = new Model()
    }

    help(){
        View.showHelp()
    }

    list(){
        View.showList(this.data.listData())
    }

    add(input){
        View.showAddedData(this.data.addData(input))
    }

    find(input){
        View.showById(this.data.findById(input))
    }

    remove(input){
        View.showDeleted(this.data.removeById(input))
    }

    complete(input){
        View.showCompleted(this.data.listCompleted(input))
    }

    uncomplete(input){
        View.showUncompleted(this.data.listUncompleted(input))
    }

    listCreated(){
        View.showListCreated(this.data.sortByDate())
    }

    listOutstanding(input){
        View.showOutstanding(this.data.sortOutstanding(input))
    }

    listCompleted(){
        View.showListCompleted(this.data.sortByCompleted())
    }

    tag(input,inputTag){
        View.showTag(this.data.addTag(input,inputTag))
    }

    filter(input){
        View.showFilter(this.data.filterData(input))
    }
}


module.exports = Controller