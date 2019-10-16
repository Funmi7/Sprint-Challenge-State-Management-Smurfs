1. What problem does the context API help solve?

Context API solves the problem faced by some props that are required by many components within the application by
providing a way to share values like these between components without having to explicitly pass a prop through
every level of the tree.



1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. In redux, they are the only source 
of information for the store.

Reducers are just pure functions that take the previous state and an action, and return the next state. In redux they specify how the application's state changes in response to actions sent to the store.

The store contains our state for our application. Everything that changes within your application will be represented by a single JavaScript Object known as the store.

Store is known as a single source of truth because The state of your whole application is stored in an object tree within a single store, this makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort.

 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the "global" state that all components in the component tree can access, as long as they hook to it 
This is the state that your application is in and basically what is being rendered. Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

We use Application state over component state when the same state needs to be shared between multiple components and those components don’t belong to the same tree hierarchy and also when the number of props which needs to be passed through multiple components increases drastically.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Since the Redux action -> reducer flow is synchronous, we make use of  Redux Thunk to make the flow asynchronous so we can make API calls from our action creators.

Redux Thunk is a middleware that allows you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite is Context API because it simplifies state managment and it is a concept that's quite easy to grasp. It doesnt require much steps to implement.