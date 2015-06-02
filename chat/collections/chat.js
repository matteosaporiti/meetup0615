Channel = new Mongo.Collection('message.channel');
Message = new Mongo.Collection('message');

Meteor.methods({
    insertMessage: function(message) {
        message.date = new Date();
        Message.insert(message, function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
});
