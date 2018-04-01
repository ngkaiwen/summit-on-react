import React, { Component } from 'react';
import AssignmentList from "../Components/AssignmentDetails/AssignmentList.js";
import AssignmentDetailsPanel from "../Components/AssignmentDetails/AssignmentDetailsPanel.js";
import {firebaseHandle} from "../Config/firebaseAPI.js";

class AssignmentDetailsPage extends Component {

  constructor(){
    super();
    this.state = { // Initialise
      selectedAssignment : null,
      selectedAssignmentData : {},
      assignmentData : {},
      assignmentData2 :{}
    }

    this.updateAssignmentData = this.updateAssignmentData.bind(this);
    this.assignmentClickHandler = this.assignmentClickHandler.bind(this);
  }


  //Update list of assignments whenever this component is about to mount
  componentWillMount() {
    const dataLocation = "courses/" + this.props.selectedModule;
    var firebaseAssignmentsDataset = firebaseHandle.database().ref(dataLocation);
    firebaseAssignmentsDataset.on("value",Snapshot => this.updateAssignmentData(Snapshot));
  }

  /*The updateAssignmentData function is used by the firebase handle (see componentWillMount function above)
  to update the state of the AssignmentDetailsPage component (specifically, the assignmentData dictionary)
  */
  updateAssignmentData(Snapshot){
    this.setState({assignmentData:Snapshot.val()["assignments"]})
    this.setState({assignmentData2:Snapshot.val()["assignments"]})
  }

  /*
  The assignmentClickHandler function is used to handle clicks on the assignment list.
  It updates the state of selectedAssignment in the AssignmentDetailsPage component
  */
  assignmentClickHandler(key) {
    this.setState({ selectedAssignment:key });
    console.log("Selected assignment with assignment ID: " + key);
    this.setState({ selectedAssignmentData:this.state.assignmentData[key] });
  }


  //Render function
  render() {

    return (
      <div>
        <AssignmentList
          assignmentData ={this.state.assignmentData}
          assignmentClickHandler = {this.assignmentClickHandler}
          selectedModule = {""}/>
        <AssignmentDetailsPanel selectedAssignmentData ={this.state.selectedAssignmentData} assignmentData2 = {this.state.assignmentData2}/>
      </div>
      );
  }
}

export default AssignmentDetailsPage;
