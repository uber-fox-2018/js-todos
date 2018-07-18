const View = require('./view')
const Context = require('./model')

class Controller {
    constructor() {
        this._file = './data.json'
        this._context = new Context('./data.json');
        this._view = new View();
    }

    help() {
        this._view.displayHelp();
    }

    list(sortName, sortDir) {
        let tasks = this._context.items;
        let sortedtasks = this._sortBy(sortName, sortDir, tasks);
        this._view.displayList(sortedtasks);
    }

    add(content) {
        let newTask = this._context.add(content);
        this._view.displayAdd(newTask);
    }

    findById(idStr) {
        let id = +idStr;
        let task = this._context.find(id);
        
        if(typeof task === 'undefined')
            this._view.displayNoItem();
        else 
            this._view.displayItem(task);
    }

    delete(idStr) {
        let id = +idStr;
        let task = this._context.find(id);
        
        if(typeof task === 'undefined')
            this._view.displayNoItem();
        else {
            this._context.delete(id);
            this._view.displayDelete(task);
        }
    }

    complete(idStr) {
        let id = +idStr;
        let task = this._context.find(id);
        
        if(typeof task === 'undefined')
            this._view.displayNoItem();
        else if (task.completed)
            this._view.displayInvalidStatusChange(task);
        else {
            task.completed = true;
            task.completedAt = Date.now();
            this._context.update(task);
            this._view.displayComplete(task);
        }
    }

    uncomplete(idStr) {
        let id = +idStr;
        let task = this._context.find(id);

        if(typeof task === 'undefined')
            this._view.displayNoItem();
        else if (!task.completed)
            this._view.displayInvalidStatusChange(task);
        else {
            task.completed = false;
            task.completedAt = null;
            this._context.update(task);
            this._view.displayUncomplete(task);
        }
    }

    tag(idStr, tags) {
        let id = +idStr;
        let task = this._context.find(id);
        if(typeof task === 'undefined')
            this._view.displayNoItem();
        else {
            task.tags = tags;
            this._context.update(task);
            this._view.displayTags(task);
        }
    }

    filter(optionFilter) {
        let tasks = this._context.items;
        let filtered = tasks.filter(task => {
            return task.tags.includes(optionFilter);
        })
        this._view.displayList(filtered);
    }

    _sortBy(sortName, sortDir, array) {
        switch(sortName) {
            case "created":
                return this._sortDirection('createdAt', sortDir, array);
            case "completed":
                return this._sortDirection('completedAt', sortDir, array);
            default:
                return this._sortDirection('id', 'asc', array);
        }
    }
    
    _sortDirection(property, sortDir, array) {
        if(sortDir === 'asc') 
            return array.sort((a, b) => { return a[property] - b[property]});
        else
            return array.sort((a, b) => { return b[property] - a[property]});
            
    }
}

module.exports = Controller;