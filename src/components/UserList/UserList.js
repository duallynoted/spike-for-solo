import React, { Component } from 'react';
import { connect } from 'react-redux';



class UserList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USERS' })
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
                            return <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                {/* <td><Button color="secondary" variant="contained" onClick={this.handleDelete(plant.id)}>Delete</Button></td> */}
                            </tr>
                        })}
                    </tbody>
                </table>
                {/* <div>
                    {this.state.map(user => (<li key={user.firstName}>{user.lastName}, {user.firstName} is a Team Member.</li>))}
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserList);
