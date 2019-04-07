### To do list app

This is a small to do list app made from HTML, CSS and Javascript. This app's main purpose is for the Javascript club at [The Shortcut](https://theshortcut.org/).

#### Installation

This app can be run with Live Server in the Code Editor or run directly in the browser by open the `index.html` file

#### Quick guide

The first step is to create a `HTML` file with a `form` for the input of the to do list app and an empty `div` to display the current to do list. In the form there should be a text `input` for the content of the to do item and a submit `input` to add the to do item into the list.

The second step is create a `JS` file and link it into the `HTML` file. Add/change the `onsubmit` attribute of the `form` to have the value of `formSubmit`, which is a function that will defined inside the `JS` file.

The `formSubmit` will have some DOM manipulations so that it will get the value of the form text input and add it to the empty `div` in the HTML.

Bonus: Each to do item here has a button to delete itself after you've done the to-do.

One alternative way to do this is to only create a text input and a button instead of creating a form which contains both of those and use the `onclick` to call the function. The function has to be changed in a slightly manner too.
