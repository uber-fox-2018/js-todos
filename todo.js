const ControllerTodo = require('./controller/controller_todo')
const [ command, args, args2 ] = process.argv.slice(2)

const controllerTodo = new ControllerTodo()

if (!command || command === 'help') {
  controllerTodo.menuHelp()
}

switch (command) {
  case 'list': {
    controllerTodo.list()
    break
  }
  case 'add': {
    controllerTodo.add(args)
    break
  }
  case 'findById': {
    controllerTodo.findById(Number(args))
    break
  }
  case 'delete': {
    controllerTodo.deleteTodo(Number(args))
    break
  }
  case 'complete': {
    controllerTodo.complete(Number(args))
    break
  }
  case 'uncomplete': {
    controllerTodo.uncomplete(Number(args))
    break
  }
  case 'list:created': {
    controllerTodo.listCreated(args)
    break
  }
  case 'list:completed': {
    controllerTodo.listCompleted()
    break
  } 
  case 'tag': {
    controllerTodo.tag(Number(args), args2)
    break
  }
  case 'filter': {
    controllerTodo.filters(args)
    break
  }

}
