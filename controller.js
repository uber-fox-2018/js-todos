let { Model } = require("./model");
let { View } = require("./view");

class Controller {
  static c_help() {
    View.v_help();
  }

  static c_all(route, sort) {
    Model.m_all(route, sort, msg => {
      View.v_display(msg);
    });
  }

  static c_add(data) {
    // model.m_add();
    Model.m_add(data, msg => {
      View.v_display(msg);
    });
  }
  static c_findById(id) {
    Model.m_findById(id, msg => {
      View.v_display(msg);
    });
  }
  static c_remove(id) {
    Model.m_remove(id, msg => {
      View.v_display(msg);
    });
  }

  static c_tag(id, data) {
    Model.m_tag(id, data, msg => {
      View.v_display(msg);
    });
  }

  static c_complete(id) {
    Model.m_complete(id, msg => {
      View.v_display(msg);
    });
  }

  static c_uncomplete(id) {
    Model.m_uncomplete(id, msg => {
      View.v_display(msg);
    });
  }

  static c_list(data) {
    Model.m_list(data, msg => {
      View.v_display(msg);
    });
  }

  static c_filter(data) {
    Model.m_filter(data, msg => {
      View.v_display(msg);
    });
  }
}

const model = new Model();
module.exports = {
  Controller
};
