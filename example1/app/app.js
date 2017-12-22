'use strict';

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);

app.setHandler({
    'LAUNCH': function() {
        app.tell('yo');
    },
    'HelloWorldIntent': function() {

    },
});

module.exports.app = app;