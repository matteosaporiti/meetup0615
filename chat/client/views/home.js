Template.home.helpers({
   channels: function(){
       "use strict";
       return Channel.find();
   }
});

Template.home.events({
    'submit #createChat': function (e) {
        "use strict";
        Router.go('chat', {id: $(e.currentTarget).find('#name').val()});
        return false;
    }
});