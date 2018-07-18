const View = require('./view.js')
const Model = require('./model.js')

class Controller {
    constructor(){
        this.model = new Model()
        this.view = new View()
    }

     c_help(){
        var help = this.view.v_help()
    }
    
    c_list(){
        // let data = Model.m_list()
        // View.v_list(data)
        this.view.v_list(this.model.m_list())
    }

    c_add(input){
        this.view.v_add(this.model.m_add(input))
    }

     c_findById(input){
        this.view.v_findById(this.model.m_findById(input))
    }

     c_delete(input){
        this.view.v_delete(this.model.m_delete(input))
    }

    c_complete(input){
        this.view.v_complete(this.model.m_complete(input))
    }

    c_uncomplete(input){
        this.view.v_uncomplete(this.model.m_uncomplete(input))
    }

    c_listCreated(){
        this.view.v_listCreated(this.model.m_listCreated())
    }

    c_listOutStanding(input){
        this.view.v_listOutStanding(this.model.m_listOutStanding(input))
    }


}

module.exports = Controller