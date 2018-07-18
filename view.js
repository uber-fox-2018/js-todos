class View {
    constructor () {}
    displayHelp() {
        console.log("node todo.js # Will call help");
        console.log("node todo.js help # Menampilkan command apa saja yang tersedia");
        console.log("node todo.js list # Melihat daftar TODO");
        console.log("node todo.js add <task_content> # Menambahkan TODO ke dalam list");
        console.log("node todo.js findById <task_id> # Melihat detail TODO sesuai 'task_id' nya");
        console.log("node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id'");
        console.log("node todo.js complete <task_id> # Menandai status TODO selesai");
        console.log("node todo.js uncomplete <task_id> # Menandai status TODO belum selesai");
        console.log("node todo.js list:created asc|desc # Menampilkan daftar TODO diurutkan berdasarkan tanggal dibuat.");
        console.log("node todo.js list:completed asc|desc # Menampilkan daftar TODO diurutkan berdasarkan tanggal completed.");
        console.log("node todo.js tag <task_id> <tag_name_1> <tag_name_2> ...<tag_name_N>");
        console.log("node todo.js filter:<tag_name>");
    }
    displayList(tasks) {
        if(tasks.length <= 0)
            console.log('There is no items in the TODO list.');
        else {
            tasks.forEach(item => { this.displayItem(item); });
        }
    }
    displayItem(task) {
        console.log(`${task.id}. [${task.completed ? 'X' : ' '}] ${task.content} ${task.tags.length === 0 ? '' : `[${task.tags.join(', ')}]`}`);
    }
    displayAdd(task) {
        console.log(`Added "${task.content}" to TODO list.`);
    }
    displayDelete(task) {
        console.log(`Deleted "${task.content}" from TODO list.`);
    }
    displayComplete(task) {
        console.log(`Nice work. You have completed "${task.content}".`);
    }
    displayUncomplete(task) {
        console.log(`"${task.content}" is marked uncomplete.`);
    }
    displayTags(task) {
        console.log(`Tagged task "${task.content} with tags: ${task.tags.join(' ')}."`);
    }
    displayNoItem() {
        console.log('No item found.')
    }
    displayInvalidStatusChange(task) {
        console.log(`"${task.content}" is already ${task.completed ? 'completed' : 'uncomplete'}.`)
    }
}

module.exports = View;