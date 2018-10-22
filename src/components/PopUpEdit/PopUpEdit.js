import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { connect } from 'react-redux';

class PopUpEdit extends React.Component {
  state = {
    open: false,
    id: this.props.user.id, //this might be newUser
    firstName: this.props.user.first_name, //this might be first_name
    lastName: this.props.user.last_name,//this might be last_name
  };

handleChangeFor = propertyName => event => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
    });
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  updateState = () => {
    this.props.dispatch({type:'UPDATE_USER', payload:this.state});
    console.log('hey???')
    this.handleClose();
}

  render() {  
    return (
      <div>
          
        <Button className="button"onClick={this.handleClickOpen}>Update User</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Update Name"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <input value={this.state.firstName} onChange={this.handleChangeFor('firstName')} />
            <input value={this.state.lastName} onChange={this.handleChangeFor('lastName')} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateState} color="primary" autoFocus>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

PopUpEdit.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};


const mapReduxStateToProps = state => {
    return { editUser : state.userList.editUser };
}


export default connect(mapReduxStateToProps) (withMobileDialog()(PopUpEdit));