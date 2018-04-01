import React, { Component } from 'react';
import Overview from './Charts/Overview';
import Students from './Charts/Students';
import StudentDetailsPage from "./StudentDetailsPage.js";
import AssignmentDetailsPage from "./AssignmentDetailsPage.js";

class chartSpace extends Component {

  constructor(){
    super();
    this.state = { // Initialise
      selectedModule : "-L5cmwU2yj2HRmfDvIUP" //Temporarily hardcode the BT3103 module as the selected module - to change after module selector is implemented
    }
  }

  render() {
    //Renders or does not render a particular chart depending on which page was selected in the toolbar
    let ovw = (this.props.type === 'overview') ? <Overview selectedModule = {this.state.selectedModule}/> : null;
    let stu = (this.props.type === 'students') ? <Students selectedModule = {this.state.selectedModule}/> : null;
    let stulst = (this.props.type === 'studentsList') ? <StudentDetailsPage selectedModule = {this.state.selectedModule}/> : null;
    let asgnlst = (this.props.type === 'assignmentsList') ? <AssignmentDetailsPage selectedModule = {this.state.selectedModule}/> : null;

    return (
      <div>
        {ovw}
        {stu}
        {stulst}
        {asgnlst}
      </div>

    );
  }
}

export default chartSpace;
