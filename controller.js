const view = require('./view');
const model = require('./model');

class Controller {
  constructor(file) {
    this.model = new model(file);
    this.view = new view();
  }

  help() {
    let menu = this.model.help();
    this.view.help(menu);
  }

  listTodo() {
    let list = this.model.listTodo()
    this.view.listTodo(list);
  }

  addTask() {
    
  }

  save(addTask) {
    let listUpdated = this.model.save(addTask);
    this.view.updateTask(listUpdated);
    
  }

}

module.exports = Controller;