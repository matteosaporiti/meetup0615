Template.messages.helpers({
    messages: function(){
        return Message.find( {},{sort: {date: -1}});
    }
});