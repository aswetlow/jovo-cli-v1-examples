'use strict';

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);

app.setHandler({
    'LAUNCH': function() {
        app.toIntent('HelloWorldIntent');
    },
    'HelloWorldIntent': function() {
        app.tell('hello');
    },
});

module.exports.app = app;