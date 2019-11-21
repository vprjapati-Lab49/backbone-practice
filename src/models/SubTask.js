import Task from "./Task";

const SubTask = Task.extend({
  default: {
    title: 'No subtask title',
    description: 'None'
  },
  printAttr: () => {
    console.info('Attributes here for the subtask')
  }
});