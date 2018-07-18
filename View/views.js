class View {
    static displayMessage(msg, err=undefined) {
        if(msg) {
            console.log(msg);
        } else {
            console.log(err);
        }
    }
}

module.exports = View