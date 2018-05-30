
import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Meteor.startup(function(){
  HTTP.post("http://95.216.139.204:1080/login",{header, data:{username: "zenta",password: "123456"}},(err,result)=>{
if (!err){
  Session.set("token",result.data.token)
  header.Authorization="Bearer "+result.data.token;
} else {
  console.log(err);
}
})

});

Template.eventz.events({
  'click button'(){
      $(".modal").modal('show')
  }
})
Template.eventz.helpers({
  days(){
    return [
      {
        date: "12.05.12",
        events: [
          {
            time: "12:05",
            title: "OKOK",
            initiator: "scyteam"
          }
        ]
      },
      {
        date: "13.05.12",
        events: [
          {
            time: "12:05",
            title: "OKOK",
            initiator: "scyteam"

          }
        ]
      },
      {
        date: "14.05.12",
        events: [
          {
            time: "12:05",
            title: "OKOK",
            initiator: "scyteam"

          },
          {
            time: "12:05",
            title: "OKOK",
            initiator: "scyteam"

          }
        ]
      }
    ]
  }
});

Template.day.helpers({
  date(){
    return Template.instance().data.date
  },
  events(){
  return Template.instance().data.events
    }
})

Template.event.helpers({
  title(){
    return Template.instance().data.title
  },
  time(){
  return Template.instance().data.time
},
initiator(){
  return Template.instance().data.initiator

}
})
Template.calendar.onRendered(function() {
  $('#calendar').fullCalendar({

    // put your options and callbacks here
  })
  $('#calendar').fullCalendar('renderEvent', {title: "sdf",start: "05.20.2018"})


})
