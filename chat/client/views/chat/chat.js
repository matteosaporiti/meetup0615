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