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

  addStatus(taskStatus) {
    console.log(taskStatus);
  }

  complete(list) {
    for(let i = 0; i < list.length; i++) {
      console.log(`${list[i].id}.  [${list[i].status}]  ${list[i].task}`);
    }
  } 

  uncomplete(list) {
    for(let i = 0; i < list.length; i++) {
      console.log(`${list[i].id}.  [${list[i].status}]  ${list[i].task}`);
    }
  } 

}

module.exports = View;