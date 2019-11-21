import Backbone from "backbone";

const Task = Backbone.Model.extend({
  default: {
    title: 'None',
    description: 'None'
  },
  validate: function (attrs) {
    if (!attrs.title || attrs.title === 'None') {
      return 'Title is a required property or value is set to None';
    }
  },
  printAttr: () => {
    console.info('Attributes here for the task')
  }
});

export default Task;