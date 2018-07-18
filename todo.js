let argv = process.argv.slice(2);
let command = argv[0];
let { Controller } = require("./controller.js");
let id;
let str;
let data;

switch (command) {
  case undefined:
    Controller.c_help();
    break;

  case "list":
    str = argv.slice(2);
    sort = str.join(" ");
    route = argv[1];
    console.log(route,sort);
    
    Controller.c_all(route,sort);
    break;

  case "add":
    str = argv.slice(1);
    data = str.join(" ");
    Controller.c_add(data);
    break;

  case "findById":
    id = argv[1];
    Controller.c_findById(id);
    break;

  case "delete":
    id = argv[1];
    Controller.c_remove(id);
    break;

  case "tag":
    str = argv.slice(2);
    data = str.join(" ");
    id = argv[1];
    // console.log(id,data);
    Controller.c_tag(id, data);
    break;

  case "complete":
    id = argv[1];
    Controller.c_complete(id);
    break;

  case "uncomplete":
    id = argv[1];
    Controller.c_uncomplete(id);
    break;

  case "filter:":
    str = argv.slice(1);
    data = str.join(" ");
    // id = argv[1];
    // console.log(data);
    Controller.c_filter(data);
    break;
}
