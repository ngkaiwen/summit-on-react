import React, { Component } from 'react';
import "./AssignmentDetails.css";

class CompletionRate extends Component {

  render() {
  	const data = this.props.selectedAssignmentData

  	if ( Object.keys(data).length === 0){ return null } //Check whether an assignment has been selected in assignment list - do not render anything if nothing has been selected

	else {
    const completion_rate = data["completion rate"]
    const completed_student_names = data["completed_student_names"]
		return (
      <div className="completion-rate">
        Completion Rate : {completion_rate} <br/>
        Students who completed assignment : {completed_student_names} <br/>
      </div>
	    );
	}
  }
}

export default CompletionRate;
