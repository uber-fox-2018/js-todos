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
  }

  static display (data){
    data.forEach((data) => {
      console.log(`${data.id}. ${data.status} ${data.task}`);
    })
  }

  static added (task){
    console.log(`"${task}" added to your TODO list`);
  }

  static deleted (task){
    console.log(`"${task[0].task}" deleted from your TODO list`);
  }
}


module.exports = ToDo;