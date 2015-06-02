Meteor.publish('chats', function() {
    "use strict";
    var sub = this;
    var added = [];
    var handle = Message.find().observeChanges({
        added: function (id, fields) {
            if(added.indexOf(fields.channel) == -1){
                added.push(fields.channel);
                sub.added('message.channel',id, {name: fields.channel});
            }
        }
    });

    // mark complete, clean up when stopped
    sub.ready();

    sub.onStop(function () {
        handle.stop();
    });
});

Meteor.publish('messages', function(channel) {
    "use strict";
    return Message.find({channel: channel},{sort: {date: -1}, limit: 10});
});