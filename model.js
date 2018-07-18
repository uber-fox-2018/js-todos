const fs = require('fs')

class Context {
    constructor(file) {
        this._file = file;
        this._tasks = [];
    }

    get items() {
        this._read();
        return this._tasks;
    }

    find(id) {
        this._read();
        let task = this._tasks.find(item => {
            return item.id === id;
        });
        return task;
    }

    add(content) {
        let newTask, lastId;

        this._read();

        if(this._tasks.length === 0)
            lastId = 0;
        else
            lastId = this._tasks[this._tasks.length - 1].id;

        newTask = new Task(++lastId, content);
        this._tasks.push(newTask);
        this._write();
        return newTask;
    }

    delete(id) {
        this._read();
        for (let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i].id === id)
                this._tasks.splice(i, 1);
        }
        this._write();
    }

    update(updatedTask) {
        this._read();
        for(let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i].id === updatedTask.id)
                this._tasks[i] = updatedTask;
        }
        this._write();
    }

    _read() {
        this._tasks = [];
        let jsonStr = fs.readFileSync(this._file, 'utf8');
        let jsonObjects = JSON.parse(jsonStr);
        jsonObjects.forEach(obj => {
            let item = Object.assign(new Task(), obj);
            this._tasks.push(item);
        });
    }

    _write() {
        let jsonString = JSON.stringify(this._tasks, null, 2);
        fs.writeFileSync(this._file, jsonString);
    }
}

class Task {
    constructor(id, content) {
        this._id = id;
        this._createdAt = Date.now();
        this.tags = [];
        this.content = content;
        this.completed = false;
        this.completedAt = null;
    }

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }
}

module.exports = Context;
