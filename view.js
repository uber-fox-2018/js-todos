class ToDo {

  static help(){
    console.log('node todo.js');
    console.log('node todo.js help');
    console.log('node todo.js list');
    console.log('node todo.js add "<new_task>"');
    console.log('node todo.js findById <task_id>');
    console.log('node todo.js delete <task_id>');
    console.log('node todo.js complete <task_id>');
    console.log('node todo.js uncomplete <task_id>');
    console.log('node todo.js sortby created <ASC/DESC>');
    console.log('node todo.js sortby completed <ASC/DESC>');
    console.log('node todo.js tag <task_id> <tag(s)>');
    console.log('node todo.js filter <tag>');
  }

  static display (tasks){
    tasks.forEach((task) => {
      console.log(`${task.id}. ${task.status} ${task.task}`);
    })
  }

  static added (task){
    console.log(`"${task}" added to your TODO list`);
  }

  static deleted (task){
    console.log(`"${task[0].task}" deleted from your TODO list`);
  }

  static tagged (task){
    console.log(`"${task[0].task}" tagged with: "${task[0].tags.join(' ')}"`);
  }

  static filtered(tasks){
    tasks.forEach((task) => {
      console.log(`${task.id}. ${task.task} [${task.tags}]`);
    })
  }
}


module.exports = ToDo;