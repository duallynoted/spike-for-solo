import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopUpEdit from '../PopUpEdit/PopUpEdit';


class Users extends Component {


    render() {
        return (
            <tr>
                <td>
                    {this.props.user.first_name}
                </td>
                <td>
                    {this.props.user.last_name}
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

