


// here we will learn about what is virtual dom and why we needed it;

/**
 * We need virtual dom because we acts as a real dom in the browser;
 * It uses diff algo under the hood to reconcile the dom;
 * What I mean by that is it will check the previous dom and current dom;
 * The same why git also works by the way;
 * 
 * this all help with the minimum updates that the new virtual dom has to make to give it to real dom;
 * It also batches the update to increase the speed;
 * 
 * By using the Virtual DOM and its efficient diffing algorithm, 
 * React minimizes the number of DOM manipulations, 
 * leading to better performance and a smoother user experience, 
 * especially in applications with complex UIs or frequent updates.
 */


// fibre in react and it's uses:

/**
 * In React, Fiber refers to an internal implementation detail that powers the reconciler, the core algorithm responsible for updating the Virtual DOM and scheduling rendering work. It was introduced in React version 16.

Here's a breakdown of what Fiber is and why it's significant:

1. **Fiber Reconciliation Algorithm**: Fiber is a reimplementation of the core algorithm used by React to perform reconciliation. 
It is designed to be more efficient and capable of handling large and complex component trees by breaking the work into smaller, 
incremental units.

2. **Incremental Rendering**: With Fiber, React can pause and resume rendering work, allowing it to prioritize updates, 
handle interruptions, and make rendering more predictable and responsive. This incremental rendering approach improves 
the perceived performance of React applications, especially on low-powered devices or in scenarios with heavy computation.

3. **Priority Scheduling**: Fiber introduces the concept of priority scheduling, 
which enables React to prioritize different types of work based on their importance. 
For example, React can prioritize rendering updates related to user interactions (such as animations or input handling) 
over less critical tasks like data fetching or background processing.

4. **Concurrency**: Fiber lays the foundation for concurrent rendering in React. 
Concurrent rendering allows React to work on multiple tasks concurrently, potentially improving performance by utilizing idle resources more effectively. 
It also opens the door for features like Suspense, which enables declarative data fetching and lazy loading in React applications.

5. **Debugging and Profiling**: Fiber enhances React's debugging and profiling capabilities by providing more fine-grained control 
over the rendering process. Developers can inspect the Fiber tree and track the progress of rendering work, 
making it easier to diagnose performance issues and optimize React applications.

Overall, Fiber represents a significant advancement in React's internal architecture, 
enabling better performance, smoother user experiences, and more advanced rendering capabilities. 
While Fiber itself is an internal implementation detail, its effects are visible in how React applications behave and perform.
 */