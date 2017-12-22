'use strict';

const {JovoClazz} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new JovoClazz(config);

app.setHandler({
    'LAUNCH': function() {
        app.tell('yo');
    },
    'HelloWorldIntent': function() {
        app.tell('hello');
    },
});

module.exports.app = app;