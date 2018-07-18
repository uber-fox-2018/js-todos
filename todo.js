(function(){
    const Controller = require('./controller')
    let controller = new Controller();

    let args = process.argv.slice(2);
    let commandSplit = args[0].split(':');
    let command = commandSplit[0];
    let option = commandSplit[1];

    switch(command) {
        case "list":
            controller.list(option, args[1]);
            break;
        case "add":
            controller.add(args[1]);
            break;
        case "findById":
            controller.findById(args[1]);
            break;
        case "delete":
            controller.delete(args[1]);
            break;
        case "complete":
            controller.complete(args[1]);
            break;
        case "uncomplete":
            controller.uncomplete(args[1]);
            break;
        case "tag":
            controller.tag(args[1], args.slice(2))
            break;
        case "filter":
            controller.filter(option)
            break;
        default:
            controller.help();
            break;            
    }
}());