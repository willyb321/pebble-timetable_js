var UI = require('ui');
// Make a list of menu items

var timeTable = [
  {
    title: "Monday A",
    subtitle: "SDD(43), ENG(58), BUS(54), IDT(43), MATH(12)"
  },
  {
    title: "Monday B",
    subtitle: ""
  },
  {
    title: "Tuesday A",
    subtitle: ""
  },
  {
    title: "Tuesday B",
    subtitle: ""
  },
  {
    title: "Wednesday A",
    subtitle: ""
  },
  {
    title: "Wednesday B",
    subtitle: "NOPE"
  },
  {
    title: "Thursday A",
    subtitle: ""
  },
  {
    title: "Thursday B",
    subtitle: ""
  },
  {
    title: "Friday A",
    subtitle: ""
  },
  {
    title: "Friday B",
    subtitle: ""
  },
];

// Create the Menu, supplying the timetable
var tableMenu = new UI.Menu({
  sections: [{
    title: 'TimeTable',
    items: timeTable
  }]
});



// Show the Menu
tableMenu.show();
// Add a click listener for select button click
tableMenu.on('select', function(event) {

  // Show a card with clicked item details
  var detailCard = new UI.Card({
    title: timeTable[event.itemIndex].title,
    body: timeTable[event.itemIndex].subtitle
  });

  // Show the new Card
  detailCard.show();
});

