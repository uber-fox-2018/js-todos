class View {
    static help() {
        console.log("Hallo, selamat datang di TOdo Apps");
        console.log('==================================');
        console.log('$_ node todo.js help');
        console.log('$_ node todo.js list');
        console.log('$_ node todo.js add <task_content>');
        console.log('$_ node todo.js findById <task_id>');
        console.log('$_ node todo.js delete <task_id>');
        console.log('$_ node todo.js complete <task_id>');
        console.log('$_ node todo.js uncomplete <task_id>');
    }

    static DisplayList(todo) {
        console.log("===== ===== Daftar Todo ===== =====");
        for(let i = 0; i < todo.length; i++) {
            let lihat = `${ i+1 }. ${ todo[i].activity }`;
            console.log(lihat);
        }
    }

    static DisplayOne(todo) {
        console.log(`===== ===== Todo Id ke ${ todo[0].id } ===== =====`);
        let lihat = `${ todo[0].activity }`;
        console.log(lihat);
    }
}

module.exports = View