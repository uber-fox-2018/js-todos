const Model = require('./model')
const View = require('./view')

class Controller{

    constructor(){
        this.data = new Model()
    }

    help(){
        View.showHelp()
    }

    list(){
        View.showList(this.data.read())      
    }

    add(input){
        this.data.add(input)
        View.showAdd(input)
    }

    findById(id){
        let obj = this.data.findById(id)
        View.showFindById(obj)
    }

    delete(id){
        let dataDelete = this.data.delete(id)
        View.showDelete(dataDelete)
    }

    complete(id){
        this.data.complete(id)
        View.showList(this.data.read())
    }

    uncomplete(id){
        this.data.uncomplete(id)
        View.showList(this.data.read())
    }

    sortDate(input){
        let dataSortDate = this.data.sortBydate(input)
        View.showList(dataSortDate)
    }

    sortComplete(input){
        let dataSortComplete = this.data.sortByComplete(input)
        View.showList(dataSortComplete)
    }

    addTag(id,tag){
        let dataTag = this.data.addTag(id,tag)
        View.showAddTag(Number(id),tag,dataTag)
    }

    filter(tag){
        let dataFilter = this.data.filterTag(tag)
        View.showFilter(dataFilter)
    }


}

module.exports = Controller