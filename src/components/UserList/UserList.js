import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../Users/Users';

class UserList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USERS' })
    }
    updateUser = user => {
        console.log('updating user:', user);        
        this.props.dispatch({type: 'UPDATE_USER', payload: user});
    }

    render() {
        return (
            <div>
                <h3>Users</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.userList.map(user => {
                          return <Users key={user.id} user={user} updateUser={()=>this.updateUser(user.id)}/>
                        })}
                          </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserList);

// return <tr key={user.id}>
// <td>{user.first_name}</td>
// <td>{user.last_name}</td>
// <td><button onClick={()=>this.updateUser(user.id)}>Edit</button></td>
// </tr>
// })}