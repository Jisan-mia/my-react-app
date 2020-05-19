import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const paraStyle={
    backgroundColor: 'yellow',
    color: 'red',
    padding: '15px'
  }
 const nayok=['Anwar', 'Manna', 'Shakil', 'Jisan', 'Salman', 'Shuvo']
  const friends=[
    {name: 'Jisan', age: '18'},
    {name: 'Shawon', age: '17'},
    {name: 'Mursalin', age: '19'},
    {name: 'Porag', age: '18'},
    {name: 'Shakil', age: '16'},
  ]
 

  return (
    <div className="App">
      <header className="App-header">
        <p style={paraStyle}>I am a react person</p>
        <Counter></Counter>

        <Todo></Todo>
  
        <ul style={{textAlign: 'left'}}>
           {friends.map(fnd => <li> {fnd.name}</li>)}
        </ul>

        {friends.map(fnd => <Person friends={fnd}></Person>)}
        
        </header>
    </div>
  );
}

function Todo(){
  const [todo, setTodo]= useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodo(data));
  }, [])

  return(
    <div style={{textAlign:'justify', margin:'10px', border:'5px solid yellow', width:'600px', padding: '10px'}}> 
     <h2>My Todo List: </h2>
     <ul>
      {todo.map(todoList => <li>{todoList.title}</li>)}
      </ul>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1)
    
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={ () => setCount(count-1)}>Decrease</button>
    </div> 
  )
}


function Person(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200PX',
    width: '200px',
    float: 'left',
    color: 'black',
    margin: '5px'
  }
  const {name,age} = props.friends;
  return(
    <div style={productStyle}>
      <h3> {name} </h3>
      <h5>age:  {age}</h5>
      <button>Hire Me</button>
    </div>
  )
}


export default App;
