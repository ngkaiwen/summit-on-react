import React, { Component } from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
//import Avatar from 'material-ui/Avatar';

class AssignmentListItem extends Component {

  render() {

    return (
      <ListItem button = {true} divider = {true} onClick = {() => this.props.assignmentClickHandler(this.props.id)}>
      	<ListItemText primary = {this.props.name}/>
        <ListItemText secondary = {this.props.type}/>
      </ListItem>
    );
  }
}

export default AssignmentListItem;
