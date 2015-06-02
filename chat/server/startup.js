Meteor.startup(function () {
    if(Message.find().count() === 0) {
        Message.insert({
            text: 'ciao',
            user: 'Matteo',
            channel: 'prova',
            date: new Date()
        })
    }
});