class View{
  constructor() {
    
  }

  help(menu) {
    menu.forEach(element => {
      console.log(`$ ${element}`);
    });
  }

  listTodo(task) {
    for(let i = 0; i < task.length; i++) {
      console.log(`${task[i].id}. ${task[i].task}`);
    }

  }

  addTask(task) {
    console.log(task);
  }

  taskFound(taskId) {
    console.log(taskId);
    
  }

  drop(taskId) {
    console.log(taskId);
  }

  completed(taskId) {
    console.log('yeee');
    
  } 

}

module.exports = View;