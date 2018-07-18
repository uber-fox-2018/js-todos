const fs = require('fs');

class Model {
  constructor(file) {
    this._todo = file;

  }

  help() {
    const helpContent = [
      'node todo.js',
      'node todo.js help',
      'node todo.js list',
      'node todo.js add <task_content>',
      'node todo.js findById <task_id>',
      'node todo.js delete <task_id>',
      'node todo.js complete <task_id>',
      'node todo.js uncomplete <task_id>'
    ];

    return helpContent;

  }

  get todo() {
    return this._todo;
  }

  set todo(list) {
    this._todo = list;
  }
  
  listTodo() {
    return this._todo;
  }

  addTask(list) {
    this._todo = list;
  }

  save(addTask) {
    let listTodo = this._todo;
    listTodo.push({
      id: listTodo[listTodo.length-1].id + 1, 
      task: addTask
    });
    
    let taskAdded = JSON.stringify(listTodo, null, 2);
    let overWrite = fs.writeFileSync('./data.json', taskAdded);
    // for(let i = 0; i < listTodo.length; i++) {
    //   console.log(`${listTodo[i].id}. ${listTodo[i].task}`);
    // }

    return `\nTask succesfully added :)`;

  }

  search(taskId) {
    let listTodo = this._todo;
    for(let i = 0; i < listTodo.length; i++) {
      if(listTodo[i].id === +taskId) {
        return `${listTodo[i].id}. ${listTodo[i].task}`;
      } 
    }

    return `Task not found`;

  }

  drop(taskId) {
    let output = []
    let listTodo = this._todo;
    for(let i = 0; i < listTodo.length; i++) {
      if(listTodo[i].id != taskId) {
        if(listTodo[i].id > +taskId) {
          listTodo[i].id -= 1;
        }
        output.push(listTodo[i]);
      } 
    }

    let taskDroped = JSON.stringify(output, null, 2);
    let overWrite = fs.writeFileSync('./data.json', taskDroped);

    return 'Task succesfully deleted';

  }

  completed(taskId) {
    console.log('yeee');
    
  }

}

module.exports = Model;