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
      console.log(data)
    })
  }

}


module.exports = ToDo;