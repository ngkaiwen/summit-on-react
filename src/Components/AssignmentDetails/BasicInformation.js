import React, { Component } from 'react';
import "./AssignmentDetails.css";

class BasicInformation extends Component {

  render() {
    console.log(this.props.selectedAssignmentData)
    //let data;
    /**if (this.props.selectedAssignmentData) {
      const data = this.props.selectedAssignmentData
    }**/
    const data = this.props.selectedAssignmentData
    if ( Object.keys(data).length === 0){ return null } //Check whether an assignment has been selected in assignment list - do not render anything if nothing has been selected
	else {
    const name = data["name"]
    const questionType = data["questionType"]
    const details = data["details"]
    const open = data["open"]
    const deadline = data["deadline"]
		return (
	   	  <div className="basic-information">
	      	Name : {name} <br/>
          QuestionType : {questionType} <br/>
          Details: {details} <br/>
          Opened on: {open} <br/>
          Deadline: {deadline} <br/>
	      </div>
	    );
	}
  }
}

export default BasicInformation;
