import React, {Component} from 'react';
import './App.css';
import Counter from './components/Counter'

//Componente baseado em classe
class App extends Component{
  render(){
    return (
      <div className="App">
        <Counter initialValue={9876}/>
        <Counter />
      </div>
    )
  }  
}
export default App;
