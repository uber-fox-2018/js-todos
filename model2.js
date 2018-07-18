const fs = require('fs');

class Model {
    constructor() {
        this.data = this.readData();

    }

    readData() {
        const data = JSON.parse(fs.readFileSync('data.JSON', 'utf8'));
        this.data = data;
        return this.data;
    }

    writeData() {
        fs.writeFileSync('./data.json', JSON.stringify(this.data));

    }

    addToList(newTask) {
        // this.readData();
        let newId = 0;
        let lastIdx = this.data.length - 1;
        if (this.data.length == 0) {
            newId = 1;
        } else {
            newId = this.data[lastIdx].id + 1;
        }
        let newInput = {
            id: newId,
            check: '[ ]',
            task: newTask,
            tag: [],
            created: new Date(),
            completed: null
        }
        this.data.push(newInput);
        this.writeData(this.data);
        return true;

    }

    findById(id) {
        // this.readData();
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return this.data[i];
            }
        }
        return false;
    }

    delete(id) {
        // this.readData();
        let toBeDeleted = {};
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                toBeDeleted = this.data[i];
                // console.log(this.data);
                this.data.splice(i, 1);
                this.writeData(this.data);
            }
        }
        return toBeDeleted;
    }

    completeTask(id) {
        // this.readData();
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                this.data[i].check = '[x]';
                this.data[i].completed = new Date();
                this.writeData(this.data);
            }
        }
        return true
    }

    uncompleteTask(id) {
        // this.readData();
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                this.data[i].check = '[ ]';
                this.writeData(this.data);
            }
        }
    }

    sortCreated(created) {
        // this.readData();
        if (created == 'asc') {
            this.data.sort(function (a, b) { return new Date(a.created) - new Date(b.created) });
            return this.data;
        } else if (created == 'desc') {
            this.data.sort(function (a, b) { return new Date(b.created) - new Date(a.created) });
            return this.data;
        }
    }

    sortCompleted(completed) {
        // this.readData();
        if (completed == 'asc') {
            this.data.sort(function (a, b) { return new Date(a.completed) - new Date(b.completed) });
            // return this.data;
        } else if (completed == 'desc') {
            this.data.sort(function (a, b) { return new Date(b.completed) - new Date(a.completed) });
            // return this.data;
        }
        let output = '';
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].completed !== null) {
                output += `${this.data[i].id}. ${this.data[i].check} ${this.data[i].task} | ${this.data[i].created} | ${this.data[i].completed} \n`;
            }
        }
        return output;
    }

    addTag(input, tag) {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < tag.length; j++) {
                if (this.data[i].id == input) {
                    this.data[i].tag.push(tag[j]);
                }
            }
        }
        this.writeData();
        return this.data;
    }

    filter(tag) {
        let output = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].tag.length; j++) {
                if (this.data[i].tag[j] == tag) {
                    output.push(this.data[i]);
                }
            }
        }
        this.writeData();
        return output;
    }
}

module.exports = Model;