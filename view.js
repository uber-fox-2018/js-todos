class View {
    constructor(){}

    static help(){
        console.log('$ node todo.js')
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')
    }

    static displayList(lists){
        console.log('==========List Aktifitas==========')
        for(let i = 0; i < lists.length; i++){
            console.log( (i+1) + ' ' + lists[i].aktifitas)
        }
    }



}

module.exports = View

