# Assignment 5 - Templating and Events

Tuesday February 25<sup>th</sup> 5:45 PM

For this assignment you will write a simple search functionality for a list you have been given.
You need to use the Handlebars templating language to achieve this. The render function has been provided for you,
you need to call it whenever the user types.

## Before starting the assignment make sure that:

- Accept the assignment 5.
- <b>CLONE</b> your assignment repo to your computer. (When cloning there is no need to set upstream)
- The only thing you need to do is <code>git clone URL-OF-REPO</code> into the folder where you want the repo.


## In order to receive full credit you must make sure that:

- TODO 1: Finish the template, you need to loop over each person in the list and add it as an the template, watch the lecture or see [hbs documentation](https://handlebarsjs.com/) if you are not sure how to do this.
Every person needs to have their name, email, phone and picture in the template. Use flexbox to display people. Same as in assignment 3.
- TODO 2: Bind the proper event to the onTypeHandler. The event you need is called [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- TODO 3: Get the value from the `search` and put it in the val variable inside  `onTypeHandler`
- TODO 4: Finish the filter function, for reference look at [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) people need to be filtered by First Name.
- TODO 5: Add a button that when clicked will clear the list.


## For extra credit (1 points):
 - Style the page, make the page look nice using css. At least 50 lines of css. You can change the existing styles</li>
