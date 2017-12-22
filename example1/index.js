'use strict';

const {WEBHOOK, webhook, getType} = require('../indexV2');
let type = getType();

const {app} = require('app/app.js');


if (type === WEBHOOK) {
    webhook.listen(3000, () => {
        console.log('Example server listening on port 3000!');
    });
    webhook.post('/webhook', (req, res) => {
        app.handleWebhook(req, res);
    });
}

exports.handler = (event, context, callback) => {
    app.handleLambda(event, context, callback);
};