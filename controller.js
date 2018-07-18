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

  save(addTask) {
    let taskAdded = this.model.save(addTask);
    this.view.addTask(taskAdded);
  }

  search(taskId) {
    let taskFounded = this.model.search(taskId);
    this.view.taskFound(taskFounded);
  }

  drop(taskId) {
    let taskDeleted = this.model.drop(taskId);
    this.view.drop(taskDeleted);
  }

  completed(taskId) {
    let done = this.model.completed(taskId);
    this.view.completed(done)
  }

}

module.exports = Controller;