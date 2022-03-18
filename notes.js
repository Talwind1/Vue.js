//vue.js is a framework
//declerative
//legible
//easy to maintain
//powerful
//best of best (collection of best)
//elegant

//!directives;
//v-model: allows us to capture forms! create a relationshup between component & form input (dynamically updates)

//v-show: showing & hiding the element depend on the condition (one mounting and displaying conditionally.)

//v-if: conditionaly render one thing or another.
//v-else + v-if ---- must be siblings

//<li v-for = "num in 5" : key = "num">
//v-bind:  (or : instead!!!) for reusing classes and styles(!), creating dynamic props,etc..
//:class="red" - example for v-bind

//(not very useful)
//v-once: will not update after it renders
//v-pre: print out the inner text exactly how it is, including code(!!)

//v-on="click"   --- binding to events.
//or:
//@click

//v-html: it render a string as an html.. <a href="google.com"/> will render as a link.
//v-text: it behaves exactly like those double parenthesis, but used in other special cases. {{burgers}}

//table of directives: https://slides.com/sdrasner/intro-to-vue3-1?token=n3Yja_t9#/43

//modifiers:
//v-model.trim- removes spaces in begging and end of phrase
//v-mpdel.number- changes string to number
//v-model.lazy

//mousemove.stop-- compareable to e.stopPropagation
//mousemove.prevent -- its like preventDefault
//submit.prevent-- prevent the refresh aafter submiting
//

//methods:
//when refering 'this' in methods,we always refering the data variables.
