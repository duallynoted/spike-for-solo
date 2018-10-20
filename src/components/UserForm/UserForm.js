import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    return (
      <div className="App">
        <form>
            <input onChange={this.handleChangefor('firstName')}/>
            <input onChange={this.handleChangefor('firstName')}/>

        </form>
      </div>
    );
  }
}

export default UserForm;
