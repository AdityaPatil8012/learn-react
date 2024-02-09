import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// this is how we import the file;
import Hello from './Hello.jsx';


// here the loaded components are  added to the  react;
// Imp: we cannot add html tag directly because we can only have one tag at a time 

/**
 * note: In react we can reate our own tags but we have name
 * the file and function name using first letter capital;
 * e.g: function Hello(){}; this is the right way;
 * e.g: file Name - Hello.jsx; 
 */

// why we should use .jsx to save the file because we are returning html content in it;
// we can use .js when we are returning javascript, but vite forces us to name all the files using .jsx;

// IMP: here <App /> is parses html in javascript into html;

// but we know that App is a function so we can also use App();

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
    <h3>hello I am stupid because I think this is ok</h3>
    <App />
  </React.StrictMode>,
)
