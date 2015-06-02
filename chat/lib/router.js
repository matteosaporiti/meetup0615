Router.configure({
    layoutTemplate: 'layout',
    waitOn: function () {
        "use strict";
        return Meteor.subscribe('chats');
    }
    /*
    loadingTemplate: 'empty',
    waitOn: function () {
        "use strict";
        _.each(preloadSubscriptions, function (sub) {
            everywhereSubscriptions.subscribe(sub);
        });
        return _.map(waitPreloadSubscriptions, function (waitSub) {
            return everywhereSubscriptions.subscribe(waitSub);
        });
    }
    */
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