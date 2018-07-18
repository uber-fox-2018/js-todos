class View{

    static showMessage(message){
        console.log(message);
        
    }

    static showMenu (){
        console.log('$ node todo.js help');
        console.log('$ node todo.js list');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js findById <task_id>');
        console.log('$ node todo.js delete <tasl_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        console.log('$ node todo.js list:created asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js tag <task_id> <tag_name_1> ... <tag_name_n>');
        console.log('$ node todo.js filter:<tag_name>');
    }

    static showList(data){
        console.log('list tugas');
        
        for(var i = 0; i < data.length;i++){
            if(data[i].status === false){
                console.log(`${data[i].id}. [ ] ${data[i].task}`);
            }else{
                console.log(`${data[i].id}. [X] ${data[i].task}`);
            }
        }
    }
}

module.exports = View