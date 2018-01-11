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
        this.ask('Hi, what is your name?', 'Please tell me your name.');
    },

    'HelloWorldIntent': function() {
        this.tell('Hello World!');
    },

    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name + '!');
    },
});

module.exports.app = app;