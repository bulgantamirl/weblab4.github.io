import React from 'react';
import './States.css';


/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField:'',
    }
  }

  render() {
    return (
      
      <div className="searchStates">
        <input type="text" className="searchStates" placeholder="Enter substring" onChange={(event)=> {
          this.setState({searchField:event.target.value})
        }}/>

        {window.cs142models.statesModel().filter((val)=> {
          if (this.state.searchField=="") {
            return val
          }
          else if (val.toLowerCase().includes(this.state.searchField.toLowerCase())) {
            return val

          }
      //   else { val='utga oldsongui';
        //    return val }
        }).map((val) =>{
          return ( <div className="states"> <p> {val} </p> </div>
          );
        })}
      </div>
    );
  }
}

export default States;
