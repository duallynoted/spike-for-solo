import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserForm extends Component {

    state = {
        newUser: {
            firstName: '',
            lastName: '',
        }
    };

    handleChangeFor = propertyName => event => {
        console.log('currying')
        this.setState({
            newUser: {
                ...this.state.newUser,
                [propertyName]: event.target.value,
            }
        });
    }
    addNewUser = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_USER', payload: this.state.newUser })
        this.setState({
            ...this.state.newUser,
            newUser: {
                firstName: '',
                lastName: '',
            }
        });
        console.log('LOOOOK', this.state.newUser);
        
    }


    render() {
        return (
            <div className="App">
                <br />
                <form onSubmit={this.addNewUser}>
                    <input value={this.state.newUser.firstName} onChange={this.handleChangeFor('firstName')} placeholder="First Name" />
                    <input value={this.state.newUser.lastName} onChange={this.handleChangeFor('lastName')} placeholder="Last Name" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(UserForm);


