import React from 'react';
// import logo from './logo.svg';
import './App.css';
// const data = [{task:"test"}];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tasks:["sleeping", "eating"],
      textDecoration : '',
  };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name ==="toDoTask") {
      this.setState({value: event.target.value});
      console.log(this.state.value);
    }else{

    }
   
  }
 handleClick(event){
   console.log(event.target.value);
   if(event.target.style.textDecoration === "line-through"){
    event.target.style.textDecoration = "";
   }else{
    event.target.style.textDecoration = "line-through";
   }
   
 }
 
  
  render(){
  return (
    <div>
    <label>Enter you'r task</label><input type="text" value={this.state.value} onChange={this.handleChange} name="toDoTask"></input>
    <button onClick={()=>this.setState({tasks:this.state.tasks.concat(this.state.value)})}>Add</button>    
    <ul name="listOfTasks" onChange={this.handleChange}>
      {
  this.state.tasks.map((e,i)=><li  onClick={this.handleClick}>{e}<button onClick={()=>this.setState(this.state.tasks.splice(i,1))}>delete</button></li>)
      }
    </ul>
    </div>
  );
}
}

