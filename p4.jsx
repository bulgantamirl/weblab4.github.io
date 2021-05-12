import React from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example';
import Header from './components/header/Header';
import './styles/main.css';
    function Pages(props) {
        if(props.value) {
            return  <States /> 
        }
        else return <Example />
    }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      value: true,
      switch: 'Example',
    }
  }
  switchPages= ()=> {
    this.setState({
      value : !this.state.value,  
    });
    if(this.state.value) {
      return(
        this.setState({
          switch : 'States',
        })
      )
    }
    else { return(
          this.setState({
            switch : 'Example',
          })
        )
    }

  }
    render() {
      return(
        <div>
          <button onClick={this.switchPages}>Switch to {this.state.switch} </button>
          <Pages value={this.state.value} />
        </div>
      ) 
    }
}

ReactDOM.render(
  <div>
    <Header />
    <App />
    
  </div>,
  document.getElementById('reactapp'),
);
