import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import "./AssignmentDetails.css";
import BasicInformation from "./BasicInformation.js";
import CompletionRate from "./CompletionRate.js";
//import StudentsCompleted from "./StudentsCompleted.js";

class AssignmentDetailsPanel extends Component {


  render() {
    //console.log(this.props.assignmentData2)
    //let numberOfAssignments;
    /**if (this.props.assignmentData2) {
      console.log("if props assignmentData2")
      //numberOfAssignments = Object.keys(this.props.assignmentData2).length
    }**/
    return (
      <div className = "assignment-details-panel-container">
        <Grid container justify="center">
          <Grid item xs = {10}> <Paper>
          <BasicInformation
              selectedAssignmentData = {this.props.selectedAssignmentData}/> </Paper>
          </Grid>
            <Grid item xs = {10}> <Paper>
              <CompletionRate
                selectedAssignmentData = {this.props.selectedAssignmentData}/> </Paper>
            </Grid>

        </Grid>

      </div>
    )
  }
}

export default AssignmentDetailsPanel;
