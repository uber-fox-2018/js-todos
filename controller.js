const View = require('./view')
const Model = require('./model.js')
const model = new Model()
class Controller {


  static help () {
     View.displayHelp (`
    $ node todo.js list
    $ node todo.js add <task_content>
    $ node todo.js findById <task_id>
    $ node todo.js delete <task_id>
    $ node todo.js complete <task_id>
    $ node todo.js uncomplete <task_id>
    `)
  }

  static list () {
    model.listData()
    View.List()
  }

}

let list = new Model()

module.exports = Controller
