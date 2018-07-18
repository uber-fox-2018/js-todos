const Model = require('./Model.js');
const View  = require('./View.js');

class Controller {
    constructor(perintah) {
        this.perintah = perintah;
        this.activity = [];
        this.command();       
    }

    command() {
        if(this.perintah.length === 0 || this.perintah[0] == 'help') {
            this.help();
        } else if(this.perintah[0] == 'list') {
            this.list();
        } else if(this.perintah[0] == 'add' && this.perintah[1] != undefined) {
            this.add();
        } else if (this.perintah[0] == 'findById' && this.perintah[1] != undefined) {
            this.findById();
        } else if (this.perintah[0] == 'delete' && this.perintah[1] != undefined) {
            this.deleteId();
        } else if (this.perintah[0] == 'complete') {
            this.complete();
        } else if (this.perintah[0] == 'uncomplete') {
            this.uncomplete();
        }


    }

    help() {
        View.help()
    }

    list() {
        let todo = Model.read();
        View.DisplayList(todo);
    }

    add() {
        let todo = Model.read();
        let id = +todo[todo.length-1].id + 1;
        let activityObj = {
            "id": id,
            "activity": this.perintah[1],
            "status": true
        };
        
        this.activity = todo
        this.activity.push(activityObj);

        let tulis = this.activity;
        Model.write(tulis);
        this.activity = [];
        this.list();
    }

    findById() {
        let todoId = Model.findById(this.perintah[1]);
        View.DisplayOne(todoId);  
    }

    deleteId() {
        let todo = Model.read();
        let dataTodo = [];
        for(let i = 0; i < todo.length; i++) {
            if(todo[i].id != this.perintah[1]) {
                dataTodo.push(todo[i]);
            }
        }

        this.activity = dataTodo;
        Model.write(this.activity);
        this.activity = [];
        this.list();
    }

    complete() {
        let todo = Model.read();
        console.log("todo ", todo[1].status);
        let dataTodo = [];
        for(let i = 0; i < todo.length; i++) {
            if(todo[i].id == this.perintah[1]) {
                todo[i].status = false;
                dataTodo.push(todo[i]);
            } else {
                dataTodo.push(todo[i]);
            }
        }

        this.activity = dataTodo;
        Model.write(this.activity);
        this.activity = [];
        this.list();
    }

    uncomplete() {
        let todo = Model.read();
        console.log("todo ", todo[1].status);
        let dataTodo = [];
        for(let i = 0; i < todo.length; i++) {
            if(todo[i].id == this.perintah[1]) {
                todo[i].status = true;
                dataTodo.push(todo[i]);
            } else {
                dataTodo.push(todo[i]);
            }
        }

        this.activity = dataTodo;
        Model.write(this.activity);
        this.activity = [];
        this.list();
    }


} // end of Controller
module.exports = Controller;