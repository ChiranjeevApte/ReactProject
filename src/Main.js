import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends React.Component
{
  render()
  {
    return (
        <div className='background'>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        </div>
    )
  }
}
export default Main;