class View {

    static helpMenu() {
        console.log(`======================================================`)
        console.log(`node todo.js`);
        console.log(`node todo.js help`);
        console.log(`node todo.js list`);
        console.log(`node todo.js add <task_content>`);
        console.log(`node todo.js findById <task_id>`);
        console.log(`node todo.js delete <task_id>`);
        console.log(`node todo.js complete <task_id>`);
        console.log(`node todo.js uncomplete <task_id>`);
        console.log(`node todo.js list:created asc|desc`);
        console.log(`node todo.js list:completed`);
        console.log(`node todo.js tag <task_id> <tag_name_1> <tag_name_2>`);
        console.log(`node todo.js filter:<tag_name>`);
        console.log(`=====================================================`)
    }

    static showList(data) {
        let dataStr = '';
        for (let i = 0; i <= data.length - 1; i++) {
            let dataLines = `${data[i].id}. ${data[i].check} ${data[i].task} | tags: ${data[i].tag} | ${data[i].created} | ${data[i].completed}`;
            dataStr = '\n' + dataStr + dataLines + '\n';
        }
        console.log(dataStr);
    }

    static showListError() {
        console.log(`Error to show list.`)
    }

    static addSuccessful() {
        console.log(`Successfully added task to list!`);
    }

    static addFailed() {
        console.log(`Failed to add task.`);
    }

    static printById(data) {
        console.log(`${data.id}. ${data.task}`);
    }

    static delete(data) {
        console.log(`Deleted "${data.task}" from To-do list.`)
    }

    static completeTask(data) {
        View.showList(data);
        // console.log('=============================')
        // let dataStr = '';
        // for (let i = 0; i <= data.length - 1; i++) {
        //     let dataLines = `${data[i].id}. ${data[i].check} ${data[i].task}`;
        //     dataStr = dataStr + dataLines + '\n';
        // }
        // console.log(dataStr);
    }

    static uncompleteTask(data) {
        View.showList(data);
        // console.log('=============================')
        // let dataStr = '';
        // for (let i = 0; i <= data.length - 1; i++) {
        //     let dataLines = `${data[i].id}. ${data[i].check} ${data[i].task}`;
        //     dataStr = dataStr + dataLines + '\n';
        // }
        // console.log(dataStr);
    }

    static sortCreated(data) {
        View.showList(data);
    }

    static sortCompleted(data) {
        console.log(data);
    }

    static addTag(data) {
        View.showList(data);
    }

    static showTags(tag) {
        for (let i = 0; i < tag.length; i++) {
            console.log(`${tag[i].id}. ${tag[i].task} : ${tag[i].tag}`);
        }
    }
}

module.exports = View;