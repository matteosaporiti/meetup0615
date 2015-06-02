Meteor.startup(function () {
    if(Message.find().count() === 0) {
        Message.insert({
            text: 'ciao',
            user: 'matteo',
            channel: '12345',
            date: new Date()
        })
    }
});