
class View {
    constructor(data){
        this.data = data
    }

    show(){
        console.log(this.data)
    }

    help(){
        console.log('node todo.js ')
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
    }
    addData(data){
        console.log('added ' + data + ' to your TODO list')
    }
    deleteData(data){
        console.log('deleted ' + data + ' from your TODO list')
    }
}

module.exports = View