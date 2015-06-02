Template.messages.helpers({
    messages: function(){
        "use strict";
        return Message.find( {},{sort: {date: -1}});
    }
});