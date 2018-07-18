class View{
  constructor() {
    
  }

  help(menu) {
    menu.forEach(element => {
      console.log(element);
    });
  }

  listTodo(list) {
    for(let i = 0; i < list.length; i++) {
      console.log(`${list[i].id}. ${list[i].task}`);
    }
  }

  updateTask(list) {
    console.log(list);
    
  }

}

module.exports = View;