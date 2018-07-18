
class View {
    constructor() {
        
    }

    showHelp() {
        console.log('$ node todo.js                              # will call help');
        console.log('$ node todo.js help                         # menampilkan command apa saja yang tersedia');
        console.log('$ node todo.js list                         # Melihat daftar TODO');
        console.log('$ node todo.js add <task_content>           # Menambahkan TODO ke dalam list');
        console.log('$ node todo.js findById <task_id>           # Melihat detail TODO sesuai `task_id` nya');
        console.log('$ node todo.js delete <task_id>             # Mengahpus TODO sesuai `task_id` nya');
        console.log('$ node todo.js complete <task_id>           # Menandai status TODO selesai');
        console.log('$ node todo.js uncomplete <task_id>         # Menandai status TODO belum selesai');
    }

    showData(result) {
        console.log('Daftar list TODO :');
        console.log(result)
    }

    showAdd(result) {
        console.log(`Added ${JSON.stringify(result.task)} to your TODO list...`);
        
    }

    showFindById(result){
        console.log(`findById : ${result}`);
        
    }

    showDeleteId(result){
        console.log(`Deleted ${result.task} from your TODO list...`);
        
    }

    showDataCompleted(result) {
        console.log('Daftar list TODO completed:');
        console.log(result)
    }

    showTag(result){
        console.log(`Tagged ${result.task} with tags : ${result.tag.join(', ')}`);
        
    }
}


module.exports = View;