import { Component } from "react";
import './App.css'


class App extends Component {

  state={
    Name: "",
    Department: "",
    Rating: "",
    feedback: []
  };


 render(){
 const HandleChange = (event)=>{
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.value);
  }

  const HandleClick = (event)=>{
    event.preventDefault();
    console.log(this.state);
    const arr ={
      Name : this.state.Name,
      Department : this.state.Department,
      Rating : this.state.Rating,
    }
    let temp = this.state.feedback;
    temp.push(arr);
    this.setState({feedback : temp});
    console.log(this.state.feedback);
  }

  return (
    <div className="container">
      <h1>Employee FeedBack form</h1>
      <form>
        <label htmlFor="Name">Name: </label>
        <input type="text" name="Name" value={this.state.Name} onChange={HandleChange}></input><br/>
        <label htmlFor="Name">Department: </label>
        <input type="text" name="Department" value={this.state.Department} onChange={HandleChange}></input><br/>
        <label htmlFor="Name">Rating: </label>
        <input type="number" name="Rating" value={this.state.Rating} onChange={HandleChange}></input><br/>
        <button onClick={HandleClick}>Submit</button>
      </form>
      <div className="footer-container">
          {
            this.state.feedback.map((value,index)=>{
              return(
                <div className="flex-items" key={index}>
                    <span >Name:{value.Name} | Department: {value.Department} | Rating: {value.Rating}</span>
                </div>
              );
            })
          }
      </div>  
    </div>
  );
 }
}

export default App;
