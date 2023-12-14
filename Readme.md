# Reading Summary

## JavaScript Array Methods

- Array length: This returns the length of an array. It can also be used to add new elements without using push.
- Array toString(): converts an array to a string of separated array values.
- Array Join(): Joins all array elements into a string. You can indicate a separator between the values.
- Array pop(): Removes the last element from an array. Also, it returns the element that was popped
- Array push(): Adds an element to the end of an array. But it returns the new array length unlike pop.
- Array shift(): This does the same thing as pop but on the first element in the array.
- Array unshift(): This does the same thing as push but on the first element in the array.
- Array delete(): This is used to delete array elements. However it is advisable not to use as it leaves undefined space in the array. Use pop or shift.
- Array concat(): This creates a new array by merging existing arrays or merging values. However, it doesn't mutate existing arrays but return new ones.
- Array flat(): This creates new array by merging sub arrays.
- Array splice(): It is used to add new values to the array by specifying the index or position to add it to. It can also remove values from any postion in the array.
- Array slice(): slices out a piece of an array into a new array without mutating the existing array.

## JavaScript Functions

- Functions are reusable blocks of codes.The code inside the function will execute when "something" calls the function and it is call function invocation.

- A return statement is used to execute a code in a function and stops after running it.

- Local variables are variables declared within a JavaScript function, and can only be accessed from within the function.

- Global variables are variavles declared outside of any function.

- The () operator invokes the function. Not using it returns the function and not the function result

- Parameters are arbitrary data passed to a function. Just like a placeholder representing actual value.

## Control Flow Statements

- Control flow statements are statements that allow you to control the order in which statements are executed in your program, based on certain conditions or criteria.

- There are three main types of control flow statements in
  JS which are:

- if/else statements : This executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
- switch statements: this is used to execute a block of code based on the value of a variable or expression. If the value doesn't match any of the case statement it returns the default case.
- loops: They are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScriptwhich are 'for loops and while loops'.

### Sources

[Array-Methods] (https://www.w3schools.com/js/js_array_methods.asp)
[Functions] (https://www.w3schools.com/js/js_functions.asp)
[Functions] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
[Functions] (https://javascript.info/function-basics)
[Control-Flow-Statements] (https://www.javascripthelp.org/learn/basics/control-flow-statements/)
