class View{
    static showHelp(){
        console.log(`Help Menu:
        node todo.js
        node todo.js help
        node todo.js list
        node todo.js add <task_content>
        node todo.js findById <task_id>
        node todo.js delete <task_id>
        node todo.js complete <task_id>
        node todo.js uncomplete <task_id>
        node todo.js list:created asc|desc
        node todo.js list:completed asc|desc
        node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
        node todo.js filter:<tag_name>`)
    }

    static showList(data){
        console.log(`List Menu:`)
        for(let i = 0; i<data.length; i++){
            console.log(`${data[i].id}. ${data[i].mark} ${data[i].task}`)
        }
    }

    static showAdd(task){
        console.log(`Added ${task} to your TODO list...`)
    }

    static showFindById(obj){
        console.log(`${obj.id}. ${obj.mark} ${obj.task}`)
    }

    static showDelete(data){
        console.log(`Deleted ${data[0].task} from your TODO list...`)
    }

    static showAddTag(id,tag){
        console.log(`Tagged task id ${id} with tags: ${tag}`)  
    }

    static showFilter(data){
        console.log(`${data.id}. ${data.task} [${data.tags}] \n`)
    }

}

module.exports = View