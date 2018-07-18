
class View {
    constructor(){

    }
    v_help(){
        //RELEASE 0
        console.log('$ node todo.js # Will call help')
        console.log('$ node todo.js help # Menampilkan command apa saja yang tersedia')
        console.log('$ node todo.js list # Melihat daftar TODO')
        console.log('$ node todo.js add <task_content> # Menambahkan TODO ke dalam list')
        console.log('$ node todo.js findById <task_id> # Melihat detail TODO sesuai `task_id` nya')
        console.log('$ node todo.js delete <task_id> # Menghapus TODO sesua `task_id` nya')
        console.log('$ node todo.js complete <task_id> # Manandai status TODO selesai')
        console.log('$ node todo.js uncomplete <task_id> # Menandai status TODO belum cdselesai')
    }

    v_list(data){
        console.log(data)
    }

    v_add(input){
        console.log(`add ${input.task} to your TODO list...`)
    }

    v_findById(input){
        console.log(`findById : ${input}`)
    }

    v_delete(input){
        console.log(`deleted ${input} from your TODO list....`)
    }

    v_complete(input){
        console.log(input) 
    }

    v_uncomplete(input){
        console.log(input)
    }

    v_listCreated(input){
        console.log(input)
    }

    v_listOutStanding(input){
        console.log(input)
    }

}
module.exports = View