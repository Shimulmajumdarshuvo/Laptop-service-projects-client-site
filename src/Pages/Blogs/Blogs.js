import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className=''>

            <div class="card w-3/4 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Optimizing performance in a React application
                        Keeping component state local where necessary. <br />
                        Memoizing React components to prevent unnecessary re-renders. <br />
                        Code-splitting in React using dynamic import() <br />
                        Windowing or list virtualization in React. <br />
                        Lazy loading images in React.</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div class="card  w-3/4 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div class="card  w-3/4 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>

            <div class="card  w-3/4 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one..</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div class="card  w-3/4 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Let’s start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.

                        Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development (TDD). In TDD, requirements are turned into specific test cases, then the software is improved to pass the new tests. In this approach, no code is added that hasn’t been proven to meet defined requirements. Unit testing is similar, in that it allows developers to modify code without affecting the functionality of other units or the product, as a whole.

                        Unit tests are usually written in the form of functions and check the value and behavior of these functions in various scenarios. For example, let’s imagine a function for the division of two numbers: the developer decides to follow the TDD approach, first writing a test with the input of values ‘4’ and ‘2’ (4 divided by 2) with ‘2’ expected as the result. Another example: when the divisor is zero, we don’t expect that the function will produce a value—we expect that it will generate an exception. We can expect that the function will notify some component about an attempt to divide by zero. </p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;