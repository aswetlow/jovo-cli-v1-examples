'use strict';

const {Webhook} = require('jovo-framework');
const {app} = require('./app/app.js');


if (isWebhook()) {
    const port = process.env.PORT || 3000;
    Webhook.listen(port, () => {
        console.log(`Example server listening on port ${port}!`);
    });
    Webhook.post('/webhook', (req, res) => {
        app.handleWebhook(req, res);
    });
}

exports.handler = (event, context, callback) => {
    app.handleLambda(event, context, callback);
};

function isWebhook() {
    return process.argv.indexOf('--webhook') > -1 ? 'webhook' : '';
}