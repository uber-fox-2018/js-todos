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
            if(lists[i].status){
                let tampil =  i+1  + ' ' + '[ ] ' + lists[i].aktifitas
                console.log(tampil)
            } else {
                let tampil =  i+1  + ' ' + '[X] ' + lists[i].aktifitas
                console.log(tampil)
            }
        }
    }

    static displayFindId(lists){
        if(lists[0].status){
            let tampil = '[ ] ' + lists[0].aktifitas
            console.log(tampil)
        } else {
            let tampil = '[X] ' + lists[0].aktifitas
            console.log(tampil)
        }
    }
}

module.exports = View

