import Backbone from 'backbone';
import TasksView from "./TasksView";
import NewTaskInputView from "./NewTaskInputView";
import $ from 'jquery';

const MainView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },
  events: {
    "click .filter-input": 'onClickFilterInput',
    'click .filter-button': 'onClickFilterButton'
  },
  onClickFilterButton: function () {
    const searchString = $('.filter-input').val();
    console.info("Search string is:" + searchString);
    this.model.filter((task) => {
      return task.get('title').includes(searchString) || task.get('description').includes(searchString);
    });
    console.info("Filtered Data" + this.todoData);
    this.render();
  },
  render: function () {
    this.$el.html(`
    <h1>    
        Todo List
    </h1>
    
    <div>
    <span> <input type="text" class="filter-input" placeholder="Search task by title or description"/>
     <button class="filter-button">Filter</button></span>
    </div>
`)
    this.$el.append(`<ul>`)
    this.$el.append(new TasksView({model: this.model}).render().$el);
    this.$el.append(`</ul>`)
    this.$el.append(new NewTaskInputView({model: this.model}).render().$el);
    return this;
  }
});

export default MainView;


