import Handlebars from 'handlebars';

Handlebars.registerHelper("listTasks", function (items, options) {
  let out = ``;

  items.forEach(item => {
    out += `<li>
         ${options.fn(item)}
    </li>`
  })

  return out;
});