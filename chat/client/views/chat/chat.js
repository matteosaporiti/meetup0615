Template.chat.events({
    'submit #insertMessage': function (e) {
        "use strict";
        Meteor.call('insertMessage', {
            text: $(e.currentTarget).find('#text').val(),
            user: $(e.currentTarget).find('#name').val(),
            channel: Router.current().params.id,
            date: new Date()
        }, function (err) {
            if (err) {
                console.log(err);
            }
        });
        $(e.currentTarget).find('#text').val('');
        return false;
    }
});

Template.chat.onRendered(function () {
    "use strict";
    Template.messagesOld.removeAll();
    Template.chat.observeHandler = Message.find({channel: Router.current().params.id}).observe({
        removed: function (message) {
            Template.messagesOld.addMore(message);
        }
    });
});

Template.chat.onDestroyed(function () {
    "use strict";
    if (Template.chat.observeHandler) {
        Template.chat.observeHandler.stop();
    }
});