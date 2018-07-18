const fs = require('fs');
const TASK_JSON_PATH = "./database.json";

//Controller
class Controller{
    constructor(file){
        this._model = new Model(file) //instantiate
    }
    get model(){
        return this._model;
    }
    
    displayList(){
        let dataToView= this.model.read()
        View.display(dataToView);
    }

    addTodo(newTodo){
        this._model.add(newTodo)
    }

    deleteTodo(id){
        this._model.del(id)
    }

    findTodo(id){
        this._model.findById(id)
    }

    checkTodo(id){
        this._model.check(id)
    }

    uncheckTodo(id){
        this._model.uncheck(id)
    }

    tags(arr){
        this._model.tag(arr)
    }

    filtered(word){
        let result = this._model.filter(word);
        View.display(result);
    }

    list_completed(word){
        let result = this._model.listCompleted(word);
        View.display(result);
    }

    list_created(word){
        console.log("hallo")
        let result = this._model.listCreated(word);
        View.display(result);
    }

    list_outstanding(word){
        let result = this._model.listOutstanding(word);
        View.display(result);
    }
}
//View
class View{
    static display(data){
        if(data.length<=0){
            console.log("No data")
        }else{
            for(let i=0;i<data.length;i++){
                if(data[i].status === "complete"){
                    console.log(`${i+1}. [X] ${data[i].todo} ||  tags: [${data[i].tags}]`)
                }else{
                    console.log(`${i+1}. [] ${data[i].todo} || tags: [${data[i].tags}]`)
                }
            }
        }
    }

    static help(){
    console.log("list");
    console.log("add <task_content>");
    console.log("findById <task_id>");
    console.log("delete <task_id>");
    console.log("complete <task_id>");
    console.log("uncomplete <task_id>");
    console.log("list:created asc|desc");
    console.log("list:completed asc|desc");
    console.log("list:outstanding asc|desc");
    console.log("tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
    console.log("filter:<tag_name>")
    }
}

//Model
class Model{
    constructor(file){
        this._file = file
        this._todo = this.read()
    }
    get file(){
        return this._file
    }
    get todo(){
        return this._todo;
    }

    read(){
        var fileStr = fs.readFileSync(this.file, 'utf-8');
        let listTodo = JSON.parse(fileStr);
        this._todo = listTodo
        return listTodo;
    }

    write(){
        let fileContent = JSON.stringify(this.todo, null, 2)
        fs.writeFileSync(this.file, fileContent)
    }

    add(newTodo){
        this.read();
        let task = newTodo.todo.join(" ");
        let lastId = this.todo[this.todo.length-1].id;
        newTodo.todo = task + " - id: " + (lastId+1);
        if(lastId === undefined){
            newTodo.id = 1;
        }else{
            newTodo.id = ++lastId;
        }
        console.log(`Added ${newTodo.todo} to your TODO list...`);
        newTodo.created_at = new Date().toLocaleString();
        newTodo.completed_at = false;
        newTodo.tags = [];
        this.todo.push(newTodo);
        this.write();
    }

    findById(id){
        //get data
        var data = this.todo;
        //delete item
        let i = 0;
        for(var elem of data){
            if(elem.id === id){
                break;
            }
            i++
        }
        console.log(data[i].todo);
        return i;
    }

    del(id){
        // //get data
        var data = this.todo;
        let i = this.findById(id);

        //delete item
        console.log(`Deleted "${data[i].todo}" from your TODO list...`);
        var deleted = data.splice(i,1);
        //set data
        this._todo = data;
        this.write();
    }

    //check task
    check(id) {
        //get data
        var data = this.todo;
        let i = this.findById(id);
	    //modify the data
        data[i].status = "complete";
        data[i].completed_at = new Date().toLocaleString();
	    //set data
        this._todo = data;
        this.write();
    }
    //uncheck task
    uncheck(id){
        var data = this.todo;
        let i = this.findById(id);
	    //modify the data
        data[i].status = "uncomplete";
        data[i].completed_at = false;
	    //set data
        this._todo = data;
	    this.write();
    }
    //tagging
    tag(arr){
        var data = this.todo;
        let i = this.findById(Number(arr[0]));
        let tags = arr.slice(1);
        console.log(`Tagged task ${data[i].todo} with tags: ${tags}`);
        //modify the data
        data[i].tags= tags;
        this._todo = data;
	    this.write();
    }
    //filter based on tag
    filter(arg){
        var lists = this.todo;
        var found = lists.filter(function(list){
            return list.tags.indexOf(arg)!==-1
        });
        return found;
    }

    //list by creation date
    listCreated(arg){
        let lists = this.todo;
        let clone = Object.assign([], lists);
        if(arg[0]==="asc"){
            clone.sort(function compare(a, b) {
                let dateA = new Date(a.created_at);
                let dateB = new Date(b.created_at);
                return dateA - dateB;
              });
        }else{
            clone.sort(function compare(a, b) {
                let dateA = new Date(a.created_at);
                let dateB = new Date(b.created_at);
                return dateB - dateA;
              });
        }
        return clone; 
    }

    //list by completion date
    listCompleted(arg){
        let lists = this.todo;
        let clone = Object.assign([], lists);
        clone = clone.filter(task => task.completed_at!==false);
        if(arg[0] === "asc"){
            clone.sort(function(a,b){
                let dateA = new Date(a.completed_at);
                let dateB = new Date(b.completed_at);
                return dateA - dateB;
            });
        }else{
            clone.sort(function(a,b){
                let dateA = new Date(a.completed_at);
                let dateB = new Date(b.completed_at);
                return dateB - dateA;
                
            });
        }
        return clone;
    }
    //list based on outstanding task
    listOutstanding(arg){
        let lists = this.todo;
        let clone = Object.assign([],lists);
        clone = clone.filter(task => task.completed_at===false);
        if(arg[0]==="asc"){
           clone.sort(function(a,b){
            let dateA = new Date(a.created_at);
            let dateB = new Date (b.created_at);
            return dateA - dateB;
           });
        }else{
            console.log("desc")
            clone.sort(function(a,b){
                let dateA = new Date(a.created_at);
                let dateB = new Date(b.created_at);
                return dateB - dateA;
               });
        }
        return clone;
        
    }
    
}

let controller = new Controller(TASK_JSON_PATH);
let command = process.argv[2];
let arr = process.argv;
let argument = arr.slice(3,arr.length);


if(command !==undefined && command.includes("filter")){
    let words = command.split(":");
    command = words[0];
    argument = words[1];
}

switch(command){
	case "add":
        controller.addTodo({"todo": argument});
		break;
	case "findById":
        controller.findTodo(+argument);
		break;
	case "delete":
		controller.deleteTodo(+argument);
		break;
	case "help":
		View.help();
        break;
	case "list":
        controller.displayList();
        break;
    case "complete":
        controller.checkTodo(+argument);
        break;
    case "uncomplete":
        controller.uncheckTodo(+argument);
        break;
    case "tag":
        controller.tags(argument);
        break;
    case "filter":
        controller.filtered(argument);
        break;
    case "list:created":
        controller.list_created(argument);
        break;
    case "list:completed":
        controller.list_completed(argument);
        break;
    case "list:outstanding":
        controller.list_outstanding(argument);
        break;
    case undefined:
        console.log("\x1b[91mCommand not found!!\x1b[0m");
		View.help();
		break;
	default:
		console.log("\x1b[91mCommand not found!!\x1b[0m");
		View.help();
		break;
}
