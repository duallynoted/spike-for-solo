import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


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
    };
    handleLastNameChange = (event) => {
        console.log(event.target.value);
        this.setState({
            user: {
                ...this.state.user,
                lastName: event.target.value,
            }
        });
    };

    handleButtonClick = (event) => {
        console.log(this.state);

    };

    getUsers = () => {
        console.log('spike');
        axios({
            method: 'GET',
            url: '/spike'
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            alert('Error getting users' + error);
            console.log('error', error);
        });
    };

    componentDidMount() {
        this.getUsers();
        console.log('component mounted');

    };

    render() {
        return (
            <div className="App">
                {JSON.stringify(this.state)}
                <br />
                {this.state.user.firstName} {this.state.user.lastName}

                <br />
                <p>
                    <input value={this.state.user.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
                    <input value={this.state.user.lastName} onChange={this.handleLastNameChange} placeholder="Last Name" />
                    <button value={this.state} onClick={this.handleButtonClick} >Add Name</button>
                </p>
                
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect()(UserForm);


