/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */


/* 
Ref for this project: https://www.c-sharpcorner.com/article/getting-started-with-redux-saga-in-react-native/ 

*/


/* 
Introduction 

As React native developers, we all know that Redux is a good state management JavaScript library for handling states in a centralised manner, but Redux fails when it comes to working with asynchronous data (also known as side effects). So, in this article, we'll look at how Redux Saga solves this problem and how we can integrate Redux Saga into our application. So, without further ado, let's get started.

    Redux Saga: What is it?
    Features of Redux Saga
    Redux Saga Terminology
    Simple Quote App
    Conclusion

These are the topics we will cover in this article. If you want to learn more about Redux, check out my previous article on An Introduction to Redux in React Native.
What is Redux Saga?

Redux-Saga is a middleware library designed for Redux - a widely used state management library in JavaScript applications. Its primary function is to manage the side effects of Redux actions. Side effects include operations that are asynchronous or impure and cannot be managed directly by Redux actions.

Redux-Saga simplifies the management of side effects in complex applications by using generator functions. It offers a range of helper functions to simplify common side-effect tasks, including managing cancellations and making API calls. By using Redux Saga middleware, developers can manage side effects more efficiently and create scalable applications that are easier to maintain and test.

If you want to know more about generator functions, please read the article on ES6 generators in depth.
Features of Redux Saga

Redux Saga is a powerful side effect management middleware for Redux with a wide range of features. Here are some of the key features offered by Redux Saga.

    Asynchronous operations handling: Redux Saga is a library that is built to handle asynchronous operations effectively. It's specifically designed to manage tasks such as making API calls, accessing local storage, or navigating between pages with ease. It provides a structured and organized way to handle these tasks, making it easier to maintain and keep your code clean.
    Side effect management: Redux Saga separates side effects from reducers, making code more testable and understandable.
    Error handling: Redux Saga has built-in error handling capabilities, allowing Sagas to catch logs and dispatch appropriate actions to notify the user or take corrective actions in case of errors.
    Reusability: Redux Saga can be easily reused throughout an application, increasing modularity and maintainability.
    Maintainability: Redux Saga's use of ES6 generators and separation of concerns improves code maintainability and extensibility.

Redux Saga Terminology

If you recall our previous redux article, we explained redux terminology using the story of Krishna and Radha. Now, let's move forward with that story and dive into understanding saga terminology.

Redux Saga terminology









    1. Action: Krishna decides to prepare a salad for dinner and asks Radha to chop the vegetables.
    2. Effect: Radha takes the vegetables out of the refrigerator (which can be thought of as a Redux store) and begins to chop them. Since chopping is an asynchronous operation, it might take some time to complete.
    3. Callback: After Radha finishes chopping the vegetables, she calls Krishna to inform him about it. This can be thought of as Radha dispatching an action to Krishna.
    4. Reducer: Upon receiving the message from Radha that the vegetables have been chopped, Krishna updates his mental state to reflect this. In a Redux architecture, this mental state can be thought of as the store, which holds the current state of the application.

In the above example, the asynchronous operation of chopping the vegetables is handled by Redux Saga. It achieves this by utilizing a generator function, which is a special type of function that can pause and resume execution. This allows Redux Saga to wait for the vegetables to be chopped before updating the Redux store, ensuring that the state of the store is always accurate and up-to-date.
Simple Quote App

Let's create a basic quote application with Redux and Redux Saga. In this app, we will fetch famous quotes from an API and display them in a FlatList. Join me in following these steps to build it.


*/



import React from 'react';
import Quote from './src/components/Quote';









export default function App() {
  return <Quote />;
}