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
        app.toIntent('HelloWorldIntent');
    },
    'HelloWorldIntent': function() {
        app.tell('hello');
    },
});

module.exports.app = app;