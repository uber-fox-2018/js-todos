class View {
    static showHelp() {
        console.log('$ node todo.js ## Will call help')
        console.log('$ node todo.js help ## Menampilkan command apa saja yg tersedia')
        console.log('$ node todo.js list ## Melihat daftar TODO')
        console.log('$ node todo.js add <task_content> ## Menambahkan TODO ke dalam list')
        console.log('$ node todo.js findById <task_id> ## Melihat detail TODO sesuai task_id nya')
        console.log('$ node todo.js delete <task_id> ## Mengahapus TODO sesuai task_id nya')
        console.log('$ node todo.js complete <task_id> ## Menandai status TODO selesai')
        console.log('$ node todo.js uncomplete <task_id> ## Menandai status TODO belum selesai')
    }

    static showOutput(input) {
        console.log(input)
    }
}

module.exports = View