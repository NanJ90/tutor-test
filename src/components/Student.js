import React, { Component } from 'react';
import StudentCalendar from './children/StudentCalendar';


class Student extends Component {

  // constructor(){
  //       super();
  //       this.state={
  //           events:[
  //               // {
  //               //     title:'Math',
  //               //     start:new Date(2017, 8, 26),
  //               //     end:new Date(2017, 8, 26)

  //               // }
  //           ]
  //       }
  //       // console.log()
  //       // this.handleClick=this.handleClick.bind(this);
  //   }
// call get api to get tutor's calendar 
    // handleClick(){
    //     // e.preventDefault();
    //     helpers.getTutorSession().then(function(res){
    //         console.log("populate tutor session",res.data);
    //         // this.setState({events:res.body});
    //     });
    // }
    // componentDidMount(){
    //      // console.log(this.state);
    //     helpers.getTutorCalendar().then(res =>{
    //         console.log("populate student calendar",res.data);
    //         });     
    // }
  
  render() {
    return (
        <div className="student">
                <StudentCalendar />
        </div>
    );
  }
}

export default Student;
