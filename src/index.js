import Backbone from 'backbone';
import TaskList from './models/collections/TaskList';
import Task from './models/Task';
import MainView from "./views/MainView";
import _ from 'underscore';

/*
// Approach - 1 : set attributes
var todo = new Task();
todo.set('title', 'Learn Backbone Js')
console.info(todo.get('title'));
*/

/*// Approach - 2 : set attributes
var todo = new Task({
  'title': 'Learn Backbone Js using udemy',
  'description': 'https://ion.udemy.com/course/backbonejs-tutorial/learn/lecture/1746658#overview is the link to udemy course'
});
console.info(todo.get('title'));
console.info(todo.toJSON());*/

/*
//some methods on model
todo.unset('description'); //remove an attribute
console.info(todo.toJSON());

todo.clear(); //remove all attributes
console.info(todo.toJSON());*/

/*
// validate a model

let todo = new Task({
  'title': 'Learn Backbone Js using udemy',//try be removing this
  'description': 'https://ion.udemy.com/course/backbonejs-tutorial/learn/lecture/1746658#overview is the link to udemy course'
});

console.info('todo is a valid object?' + todo.isValid());
console.info('Validation errors:' + todo.validationError);*/

/*
//inheritance:not working:fix it
var subtodo = new SubTodo({
  title: 'subtask'
});

console.info(subtodo.get('title')); //title value from subtodo will be printed*/

/*

//working with collection

const todos = new TaskList([
  new TaskList({
    'title': 'Learn Backbone Js using udemy',//try be removing this
    'description': 'https://ion.udemy.com/course/backbonejs-tutorial/learn/lecture/1746658#overview is the link to udemy course'
  }),
  new TaskList({
    'title': 'Learn Gulp',//try be removing this
    'description': 'not yet found a tutorial'
  })
]);

console.info(todos.toJSON())
console.info(todos.at(0))
console.info(todos.remove(todos.at(0)))
console.info(todos.toJSON())
console.info(todos.get('c3'))

todos.add(new Task({
  title: 'test'
}), {at: 0}); //you can use push method as well

console.info(todos.toJSON())


//searching in collections

todos.add(new Task({
  title: 'test'
}), {at: 0}); //you can use push method as well

console.info(" where" + JSON.stringify(todos.where({title: 'test'})));//all matching instances
console.info("find where" + JSON.stringify(todos.findWhere({title: 'test'}))); // first match

//filter collection by custom logic

var filteredTodos = todos.filter((todo) => {
  return todo.get('title') !== 'test';
})

console.info('filtered todos' + JSON.stringify(filteredTodos))*/


//Sample App example
const todos = new TaskList([
  new Task({
    'title': 'Learn Backbone Js using udemy',
    'description': 'https://ion.udemy.com/course/backbonejs-tutorial/learn/lecture/1746658#overview is the link to udemy course'
  }),
  new Task({
    'title': 'Learn Gulp',//try be removing this
    'description': 'Udemy : not yet found a tutorial'
  })
]);

/*
//custom events
let person = {
  name: "Mohsin",
  walk: function () {
    this.trigger('walking')
  }
}

_.extend(person, Backbone.Events)

person.on('walking',function (e) {
  console.log("Person is walking");
})
person.walk();
//person.off();//to unsubscribe from all events*/

let mainView = new MainView({el: "#container", model: todos});
mainView.render();