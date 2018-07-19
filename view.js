class View {

    static displayHelp() {
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
    }

    static displayList(value){
        let data = ''
        for (let i = 0 ; i < value.length ; i++){
            let temp = `${value[i].id} ${value[i].status} ${value[i].list} | ${value[i].tag} | ${value[i].created} | ${value[i].completed}}`
            data = data + temp +'\n'
        }
        console.log(data);
    }

    static displayListError(){
        console.log('Error to display list...');
    }

    static displaySuccessAddList(){
        console.log('Success to add list...');
    }

    static displayErrorAddList(){
        console.log('Failed to add list...');
    }

    static displayById(value){
        value.id === undefined ? console.log(`ID not found...`) :  console.log(`${value.id} | ${value.list}`)
    }

    static delete(value){
        value === undefined ? console.log(`No ID's deleted...`) : console.log(`ID ${value.id} delete success...`)
    }

    static complete(value){
        value === null ? console.log(`ID change to 'complete' not found...`) : console.log(`ID ${value} change to [x] success...`);
        
    }

    static uncomplete(value){
        value === null ? console.log(`ID change to 'uncomplete' not found...`) : console.log(`ID ${value} change to [ ] success...`);
    }

    static showAddTag(value){
        value == undefined ? console.log(`Failed to add tag...`) : console.log(`Added tag [${value.tag}] to ID ${value.id} success...`)
    }

    static showFilter(value){
        value.length === 0 ? console.log(`Failed to filter...`) : console.log(value);
    }

    static sortCompleted(value){
        console.log(value);
        
    }
}
module.exports = View

