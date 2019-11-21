import Backbone from "backbone";
import Task from "../Task"

const TaskList = Backbone.Collection.extend({
  model: Task
})

export default TaskList;