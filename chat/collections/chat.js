Channel = new Mongo.Collection('message.channel');
Message = new Mongo.Collection('message');

Meteor.methods({
    insertMessage: function(message) {
        "use strict";
        Message.insert(message, function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
});
