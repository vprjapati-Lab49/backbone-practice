import Backbone from 'backbone';
import TaskView from './TaskView';
import taskViewTemplate from '../templates/TaskViewTemplate.hbs'

const TasksView = Backbone.View.extend({
  initialize: function () {
    this.model.on("add", this.addTask, this);
  },
  addTask: function (task) {
    this.$el.append(new TaskView({model: task}).render().$el);
  },
  render: function () {
    this.$el.append(taskViewTemplate({tasks: this.model.toJSON()}));
    return this;
  }
  /*render: function () {
    console.info("Model:" + JSON.stringify(this.model))
    const self = this;

    this.model.each((task) => {
      self.$el.append(new TaskView({model: task}).render().$el);
    });
    return this;
  }*/
});

export default TasksView;