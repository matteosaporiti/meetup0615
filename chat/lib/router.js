Router.configure({
    layoutTemplate: 'layout',
    waitOn: function () {
        "use strict";
        return Meteor.subscribe('chats');
    }
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    });
    this.route('chat', {
        path: '/chat/:id',
        template: 'chat',
        waitOn: function () {
            "use strict";
            return Meteor.subscribe('messages', this.params.id);
        }
    });
});