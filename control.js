let model = require('./model.js')
let view = require('./view.js')

class Control {
    constructor(){
        this._model
        this._view
    }


    model (add){
        this._model = new model('./data.json',add)
    }

    view (parameter){
        this._view =  new view(parameter)
    }
    help(){
        this.view()
        this._view.help()
    }

    list(){
        this.model()
        let data = this._model.readData()
        this.view(data)
        this._view.show()
    }

    add(input){
        this.model(input)
        this._model.readData()
        this._model.addData()
        this.view()
        this._view.addData(input)
    }

    findById(input){
        this.model()
        this._model.readData()
        let find = this._model.findData(input)
        let findArr = [find]
        let findData = this._model.processDataObj(findArr)
        this.view(findData)
        this._view.show()
        return find
    }

    delete(id_delete){
        this.model()
        this._model.readData()
        let data = this._model.deleteData(id_delete)
        this.view()
        this._view.deleteData(data)
    }

    complete(id){
        this.model()
        this._model.readData()
        this._model.complete(id)
    }
    uncomplete(id){
        this.model()
        this._model.readData()
        this._model.uncomplete(id)
    }
    
}

module.exports = Control