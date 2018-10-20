import React, { Component } from 'react';


class UserForm extends Component {

  state = {
    user: {
      firstName: '',
      lastName: '',
    }
  };
  handleFirstNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        firstName: event.target.value,
      }
    });
  }
  handleLastNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        lastName: event.target.value,
      }
    });
  }

  handleButtonClick = (event) => {
    console.log(this.state);

  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state)}
        <br />
        {this.state.user.firstName} {this.state.user.city}

        <br />
        <input value={this.state.user.firstName} onChange={this.handleFirstNameChange} />
        <input value={this.state.user.lastName} onChange={this.handleLastNameChange} />
        <button value={this.state} onClick={this.handleButtonClick} >Add Name</button>
      </div>
    );
  }
}

export default UserForm;


// import React, { Component } from 'react';

// class UserForm extends Component {
//     state = {
//         user: {
//             firstName: '',
//             lastName: '',
//         }
//     };

//     handleChangefor = propertyName => event => {
//         this.setState({
//             user: {
//                 ...this.state,
//                 [propertyName]: event.target.value
//             }
//         });
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.setState({
//             user: {
//                 firstName: '',
//                 lastName: '',
//             }
//         });
//     };

//     // componentDidMount() {
//     //     this.getUser();
//     // };

//     render() {
//         return (
//             <div className="App">
//                 <form onSubmit={this.handleSubmit}>
//                     <input value={this.state.user.firstName} onChange={this.handleChangefor('firstName')} placeholder="First Name" />
//                     <input value={this.state.user.lastName} onChange={this.handleChangefor('lastName')} placeholder="Last Name" />
//                     <input type="submit" value="Add My Name" />
//                 </form>
//             </div>
//         );
//     }
// }

// export default UserForm;
