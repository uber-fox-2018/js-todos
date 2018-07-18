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
        console.log('node todo.js ')
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
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
        let add_data = this._model.writeData()
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
        this._model.deleteData(id_delete)
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