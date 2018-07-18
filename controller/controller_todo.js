const viewTodo = require('../view/todo_view')
const ModelTodo = require('../model/model_todo')

class ControllerTodo {

  constructor() {
    this.modelTodo = new ModelTodo()
  }

  menuHelp() {
    viewTodo.showHelp()
  }

  list() {
    const listTodo = this.modelTodo.list()
    viewTodo.list(listTodo)
  }

  add(task) {
    const addTodo = this.modelTodo.add(task)
    viewTodo.messageAdd(task)
    viewTodo.list(addTodo)
  }

  findById(id) {
    const findId = this.modelTodo.findById(id)
    viewTodo.showFind(findId)
  }

  deleteTodo(id) {
    const deleteTodos = this.modelTodo.deleteTodo(id)
    viewTodo.deleteTodo(deleteTodos)
  }

  complete(id) {
    const completeTodo = this.modelTodo.complete(id)
    viewTodo.list(completeTodo)
  }

  uncomplete(id) {
    const uncompleteTodo = this.modelTodo.uncomplete(id)
    viewTodo.list(uncompleteTodo)
  }

  listCreated(sortBy) {
    const createdList = this.modelTodo.listCreated(sortBy)
    viewTodo.list(createdList)
  }

  listCompleted() {
    const completedTodo = this.modelTodo.listCompleted()
    viewTodo.list(completedTodo)
  }

  tag(id, tagTodo) {
    const todoTag = this.modelTodo.tag(id, tagTodo)
    viewTodo.list(todoTag)
  }

  filters(filterBy) {
    const filterTodo = this.modelTodo.filters(filterBy)
    viewTodo.list(filterTodo)
  }
}

module.exports = ControllerTodo