import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import events from './events';
 
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const StudentCalendar = props => (
  <div>
    <BigCalendar
      events={[]}
      views={allViews}
      defaultDate={new Date()}
      // selectable={true}
      // onSelectSlot={props.slotselected}
    />
  </div>
);






export default StudentCalendar;