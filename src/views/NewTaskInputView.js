import Backbone from 'backbone';
import Task from "../models/Task";
import $ from 'jquery';

const NewTaskInputView = Backbone.View.extend({
  events: {
    'keyup .input-new-task': 'createNewTask'
  },
  createNewTask: function () {
    if (event.keyCode === 13) {
      this.model.add(new Task({
        title: $('#input-new-task').val(),
        description: 'No description is provided yet'
      }));
    }
  },
  render: function () {
    this.$el.html(`
    <input type='text' placeholder="Add title to create new task" id="input-new-task" class="input-new-task"/>
    `);
    return this;
  }
});

export default NewTaskInputView;