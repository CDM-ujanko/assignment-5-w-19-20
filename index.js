const search = document.querySelector('.search');
const list = document.querySelector('.list');


// TODO 1: Finish the hbs template, after you have done this you should see the list show up.
let template = `

`;

/**
 * Renders the rtempalte with the given data.
 * @param context The date to render.
 */
function render(context) {
  let compiled = Handlebars.compile(template);
  list.innerHTML = compiled(context);
}

render(data);

function onTypeHandler(event) {

  // TODO 3: value of the search field.
  let val = '';
  let filteredItems = data.items.filter(function (item) {
    // TODO 4: finish this, a filter returns a boolean
    return false
  });

  let dataCopy = {
    items: filteredItems
  };

  render(dataCopy);
}

// TODO 2: Bind the proper event to the onTypeHandler

// TODO 5: The clear button:



