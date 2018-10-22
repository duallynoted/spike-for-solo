import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopUpEdit from '../PopUpEdit/PopUpEdit';


class Users extends Component {


    render() {
        return (
            <tr>
                <td>
                    {this.props.reduxState.firstName}
                </td>
                <td>
                    {this.props.reduxState.lastName}
                </td>
                <td><PopUpEdit user={this.props.user} /></td>
            </tr>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Users);