Template.messagesOld.messages = new ReactiveVar([]);

Template.messagesOld.helpers({
    messages : function(){
        "use strict";
        return Template.messagesOld.messages.get();
    }
});

Template.messagesOld.onRendered(function () {
    "use strict";
    Template.messagesOld.messages.set([]);
    Template.messagesOld.observeHandler = Message.find({channel: Router.current().params.id}).observe({
        removed: function (message) {
            "use strict";
            var messages = [message];
            var oldMessages = Template.messagesOld.messages.get();
            Template.messagesOld.messages.set(messages.concat(oldMessages));
        }
    });
});

Template.messagesOld.onDestroyed(function () {
    "use strict";
    if (Template.messagesOld.observeHandler) {
        Template.messagesOld.observeHandler.stop();
    }
});
