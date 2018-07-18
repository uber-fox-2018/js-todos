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

  addStatus(taskStatus) {
    let convert = this.model.addStatus(taskStatus);
    this.view.addStatus(convert); 
  }

  complete(list) {
    let done = this.model.complete(list);
    this.view.complete(done);
  }

  uncomplete(taskId) {
    let undone = this.model.uncomplete(taskId);
    this.view.uncomplete(undone);
  }

}

module.exports = Controller;