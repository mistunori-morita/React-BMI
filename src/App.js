import React, { Component } from 'react';
import './App.css';
import Range from './components/Range';
import Output from './components/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>BMI Caluclator</h1>
        <form>
          <div>
            <label>Hieght</label>
            <Range />
          </div>
          <div>
            <label>Weight</label>

          </div>
        </form>
        <br/><br/>
        <Output />
      </div>
    );
  }
}

export default App;
