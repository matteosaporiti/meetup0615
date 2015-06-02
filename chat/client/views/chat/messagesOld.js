Template.messagesOld.messages = new ReactiveVar([]);

Template.messagesOld.addMore = function (message){
    "use strict";
    var messages = [message];
    var oldMessages = Template.messagesOld.messages.get();
    Template.messagesOld.messages.set(messages.concat(oldMessages));
};

Template.messagesOld.helpers({
    messages : function(){
        "use strict";
        return Template.messagesOld.messages.get();
    }
});

Template.messagesOld.removeAll = function (){
    "use strict";
    Template.messagesOld.messages.set([]);
};