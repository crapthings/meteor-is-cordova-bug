Template.registerHelper('isClient', function () {
  return JSON.stringify(Meteor.isClient)
})

Template.registerHelper('isCordova', function () {
  return JSON.stringify(Meteor.isCordova)
})

Template.registerHelper('isServer', function () {
  return JSON.stringify(Meteor.isServer)
})

Template.button.events({
  'click #redirect'() {
    window.location.replace('http://www.google.com')
  }
})
