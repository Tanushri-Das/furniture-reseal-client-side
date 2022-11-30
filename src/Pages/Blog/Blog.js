import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {

  useTitle('blog')
  return (
    <div className="my-12">
      <div className="collapse text-center mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content w-4/5 mx-auto">
          <p>
            There are four main types of state that I need to properly manage in
            my React apps:
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
            <br />
          </p>
          <p className="text-justify">
            <b>Local (UI) State</b> – Local state is data we manage in one or
            another component. Local state is most often managed in React using
            the useState hook. <br />
            <b>Global (UI) State</b> – Global state is data we manage across
            multiple components.Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at{" "}
            <least className="br"></least>
            <b>Server State</b> – Data that comes from an external server that
            must be integrated with our UI state. <br />
            <b>URL State</b> – Data that exists on our URLs, including the
            pathname and query parameters.URL state is often missing as a
            category of state, but it is an important one. In many cases, a lot
            of major parts of our application rely upon accessing URL state. Try
            to imagine building a blog without being able to fetch a post based
            off of its slug or id that is located in the URL!
          </p>
        </div>
      </div>
      <div className="collapse text-center mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        How does prototypical inheritance work?
        </div>
        <div className="collapse-content text-justify w-4/5 mx-auto">
            <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.</p><br />
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
         
        </div>
      </div>
      <div className="collapse text-center mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content text-justify w-4/5 mx-auto">
          <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p><br />
          <p>Unit Testing enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.Developers typically write unit tests. However, they are largely responsible for writing these tests to ensure that the code works – most developer tests are likely to cover happy-path and obvious negative cases.</p>
        </div>
      </div>
      <div className="collapse text-center">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
        React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content text-justify w-4/5 mx-auto">
          <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.The Vue.js core library focuses on the View layer only.Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size.The difference between React and Vue is in the methods used to render content in the DOM. Vue uses HTML and JSX templates, while React uses only JSX. While JSX is designed to speed up and greatly simplify complex tasks, it can also greatly complicate what was originally intended to be a simple task.</p>
         
        </div>
      </div>
    </div>
  );
};

export default Blog;
