class View {
    static showList(data){
        console.log(data);
    }

    static showHelp(){
        console.log(`node todo.js`);
        console.log(`node todo.js help`);
        console.log(`node todo.js list`);
        console.log(`node todo.js add <task_content>`);
        console.log(`node todo.js findById <task_id>`);
        console.log(`node todo.js delete <task_id>`);
        console.log(`node todo.js complete <task_id>`);
        console.log(`node todo.js uncomplete <task_id>`);
    }

    static showAddedData(data){
        console.log(`Added ${data.task} to your TODO list...`);
    }

    static showById(data){
        console.log(`${data.id}. ${data.task}`);   
    }

    static showDeleted(data){
        console.log(`Deleted "${data}" from your TODO list...`);
    }

    static showCompleted(data){
        console.log(data);
    }

    static showUncompleted(data){
        console.log(data);
    }

    static showListCreated(data){
        console.log(data);   
    }

    static showOutstanding(data){
        console.log(data);
    }

    static showListCompleted(data){
        console.log(data);
    }

    static showTag(data){
        console.log(data);
    }

    static showFilter(data){
        console.log(data);
    }
}

module.exports = View