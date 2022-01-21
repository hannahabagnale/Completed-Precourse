# Homework #JSVII

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

	* DOM
		Answer: DOM stands for "Document Object Model" which enables the code to produce the intended output as a webpage reloads. Should we imagine DOM as a process, we would then have to assume that it is what translates the Code into the numerous and vast objects we desire to unfold in our webpage. For example, we make use of DOM to present data in charts in a webpage. However, with the use of JavaScript, we would be able to modify DOM to our satisfaction and objectives or to the clients'.
	* DOM element selectors
		Answer: DOM offers numerous element selectors which perform based on their function as a document selector in a whole. For instance, if we wish to determine the Class's name, we would input:
			document.getElementsbyClassName('Avengers')
		as this would function to list down the objects associated with the "Avengers" class. However, using the document selector for Id, the opposite of Class, would lead to presentation of only a single element. All in all, there are other existent DOM element selectors which may be used to find and to select such.
	* DOM events
		Answer: DOM Event Handlers, Event Listeners, or, simply, Events are functions which act up when an event occurs. Let's say even just a click of the mouse could trigger the events, thus, leading to a specified outcome. Just like the element selectors, Events come in many types which only means these functions are related interesting changes or happenings in the program over the run of its course.
2. From the top level of your `Precourse` folder, run `npm test L12/Homework/tests/DOM.test.js` to run the automated tests. You will fill out the functions in `DOMhomework.js` to make the tests pass.
