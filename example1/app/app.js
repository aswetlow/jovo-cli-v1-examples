'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        app.ask('Hi, what is your name?', 'Please tell me your name.');
    },

    'HelloWorldIntent': function() {
        app.tell('Hello World!');
    },

    'MyNameIsIntent': function(name) {
        app.tell('Hey ' + name + '!');
    },
});

module.exports.app = app;