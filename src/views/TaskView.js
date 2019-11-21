import Backbone from 'backbone';
import taskViewTemplate from '../templates/TaskViewTemplate.hbs'

const TaskView = Backbone.View.extend({
  render: function () {
    this.$el.append(taskViewTemplate({tasks: [this.model.toJSON()]}));
    return this;
  }
});

export default TaskView;