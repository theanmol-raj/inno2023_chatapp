import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Plan1 from './Plan1';

//  Key Points 


const name = 'Syed' ;
const greetings = <h2>How are you {name}</h2> ;
// 1 : We can store values as well as html tags inside js variables 

const ref = document.getElementById('root') ;
// 2 : Above line is a way to point to a div in public/index.html 
// which has the id of 'root'

const root = ReactDOM.createRoot(ref);
// 3 : ReactDOM is a react obj which is providing us with a way to inject new html
//  tags inside the reference which we provide
// root now holds a method called as render which will inject the html it recieves 
// into the reference provided earlier



function plan(){
  return <h1>Lets go to Wonderla</h1>
}

// 4: Above two functions are fundamentally the same except of a fact that one starts with a capital letter
//  These functions with capital letters can later be called like an Html tag 
// <Plan><Plan /> giving you the flexiblity to create custom Html called components in React 



// root.render(
//     <div>
//       <h1>Hello {name} </h1>
//         {greetings}

//         {plan()}
//         {/* {Plan1()} Function call */}
//         <h1></h1>
//         {/* <Plan1></Plan1> React Component */}


//         {/* {Plan1('Syed' , 10 , 'India')}
//         {Plan1('Shaista' , 5 , 'USA')}
//         {Plan1('Tahir' ,1 , 'Australia' )} */}



//         <Plan1 name='Suleman' time={5} location='Russia' ></Plan1>


//     </div>
// );

//  Render method is rendering the HTML recieved to it and injecting it inside the div with id 'root'

// Self cloing tags
//  <img >   :HTML Version
//  <img>   </img> : React Version
// <img /> :React Short Version




root.render(<App />)

