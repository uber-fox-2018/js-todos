let { Todo } = require("./objTodo");
let fs = require("fs");

class Model {

  static m_all(route, sort) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    let msg = `here are all the files ${database}`;

    switch (route) {
      case undefined:
        database.forEach(element => {
          if (element.status == "inComplete") {
            console.log(`${element.id}. [ ] ${element.listName}`);
          } else {
            console.log(`${element.id}. [X] ${element.listName}`);
          }
        });
        break;

      case "completed":
        database.forEach(element => {
          element.status == "complete"
            ? console.log(`${element.id}. [X] ${element.listName}`)
            : false;
        });
        break;

      case "created":
        database.sort(function(a, b) {
          return a.createdAt - b.createdAt;
          //   console.log(a);
          console.log(database.createdAt);
        });
        // database.forEach(element => {
        //   if (element.status == "inComplete") {
        //     console.log(`${element.id}. [ ] ${element.listName}`);
        //   } else {
        //     console.log(`${element.id}. [X] ${element.listName}`);
        //   }
        // })
        break;
    }
  }

  static m_add(data) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    this._todo = new Todo();
    this._todo.addTodo(data);
    /----------------------------------/;
    database.push(this._todo);
    fs.writeFileSync("./data.json", JSON.stringify(database));
    let msg = `Added to "${this._todo.listName}" to you TODO list`;
    console.log(msg);
  }

  static m_findById(id) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    database.forEach(element => {
      if (element.id == id) {
        console.log(`Id no ${id} is ${element.listName}`);
      }
    });
  }

  static m_remove(id) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    database.forEach(element => {
      if (element.id == id) {
        const result = database.filter(function(removing) {
          return removing.id != id;
        });
        fs.writeFileSync("./data.json", JSON.stringify(result));
        console.log(`Deleted id no ${id} with list name "${element.listName}"`);
      }
    });
  }

  static m_tag(id, data) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    database.forEach(element => {
      if (element.id == id) {
        element.tag.push(data);
        fs.writeFileSync("./data.json", JSON.stringify(database));
        console.log(
          `Tagged task is ${element.listName} with tags ${element.tag}`
        );
      }
    });
  }

  static m_complete(id) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    database.forEach(element => {
      if (element.id == id) {
        element.status = "complete";
        element.completedDate = new Date();
        console.log(`Id no: ${element.id}. [X] ${element.listName}`);
        fs.writeFileSync("./data.json", JSON.stringify(database));
      }
    });
  }

  static m_uncomplete(id) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
    database.forEach(element => {
      if (element.id == id) {
        element.status = "inComplete";
        console.log(
          console.log(`Id no: ${element.id}. [] ${element.listName}`)
        );
        fs.writeFileSync("./data.json", JSON.stringify(database));
      }
    });
  }

  static m_list(data) {
    let database = JSON.parse(fs.readFileSync("./data.json"));
  }

  static m_filter(data) {
    let database = JSON.parse(fs.readFileSync("./data.json"));

    database.forEach(element => {
      element.tag.forEach(tagData => {
        if (tagData == data) {
          console.log(`"${element.listName}" has tag = [ ${element.tag} ]`);
        }
      });
    });
  }
}

const model = new Model();
module.exports = {
  Model
};
