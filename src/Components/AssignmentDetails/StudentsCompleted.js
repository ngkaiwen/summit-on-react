import React, { Component } from 'react';
import "./AssignmentDetails.css";

class StudentsCompleted extends Component {

  render() {
  	const data = this.props.selectedAssignmentData

  	if ( Object.keys(data).length === 0){ return null } //Check whether an assignment has been selected in assignment list - do not render anything if nothing has been selected

	else {
      obtainListOfStudents(){ //Obtain the list of students from the props and pass it to the render function
        var listOfStudents = [] //Used to ultimately return the list of assignments to the render function
  	    const data2 = this.props.selectedAssignmentData
        const completed_student_names = data2["completed_student_names"]
        for (var key in completed_student_names){ //Run through all the assignmentData (loaded from firebase)
          var thisStudent = data2["completed_student_names"][key]
        listOfStudents.push( //Push one AssignmentListItem component onto the listOfAssignments for each assignment in assignmentData
          thisStudent)
        }
        return listofStudents
      }

		return (
      <div className="students-completed">
        <List style = {{ maxHeight:'50%', overflow:"auto"}}>
          {this.obtainListOfStudents()}
        </List>
      </div>

	    );
	}
  }
}
/**  <Grid item xs = {10}> //code for this section in detailspanel
    <StudentsCompleted
      selectedAssignmentData = {this.props.selectedAssignmentData}/>
  </Grid>**/
export default StudentsCompleted;
