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
  'click #redirectother'() {
    window.location.replace('https://www.github.com')
  },

  'click #redirectself'() {
    window.location.reload()
  }
})
