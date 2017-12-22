# JOVO-CLI Examples

**Prerequisites:**
<br/>
Installed ASK CLI 
[QuickStart](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)


## jovo new \<project>

Creates a new project based on the 'helloWorld' template.

```sh
$ jovo new <project> [--platform <alexaSkill|googleAction|none> [--locale <en-US>]
```


**Options:**

**--platform [alexaSkill|googleAction|all|none]** - Default: none
<p>
Initializes platform specific folders in the project directory.
</p>
<br/>

**--locale [en-US]** - Default: en-US
<p>
  Locale of the skill. Creates an empty i18n file and the the language model.
</p>
<br/>

Main files:
<br/>
app/app.js - Where the logic happens
```javascript
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
```

index.php - Where the code execution happens
```javascript
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


// will be moved to jovo-framework in final version
function isWebhook() {
    return process.argv.indexOf('--webhook') > -1 ? 'webhook' : '';
}
```



### Example1

```sh
$ jovo new example1
```
Creates simple project without the the platform specific folder structure. (See [example1 project](https://github.com/aswetlow/jovo-cli-v1-examples/tree/master/example1))
![Jovo Framework](https://www.swetlow.de/example1_folderstructure.jpg)

### Example2

```sh
$ jovo new example2 --platform alexaSkill
```
Creates simple project with Alexa specific folder structure. (See [example2 project](https://github.com/aswetlow/jovo-cli-v1-examples/tree/master/example2))
![Jovo Framework](https://www.swetlow.de/example2_folderstructure.jpg)


<br/>
<br/>

## jovo update-model

Builds platform specific language/interaction model files from the abstract model.

```sh
$ jovo update-model [--platform <alexaSkill|googleAction>
```

**Options:**

**--platform [alexaSkill|googleAction]**
<p>
Builds platform specific 
</p>
<br/>



### (Jovo) Language Model
```json
{
	"invocation": "first example",
	"intents": [
		{
			"name": "HelloWorldIntent",
			"phrases": [
				"Hello world",
				"Hey World"
			]
		},
		{
			"name": "OnboardingIntent",
			"phrases": [
				"My name is {name} and I live in {city}",
				"My name is {name}",
				"I live in {city}",
				"I'm {name} from {city}",
				"I go by {name}"
			],
			"inputs": [
				{
					"name": "name",
					"type": "AMAZON.US_FIRST_NAME|@sys.given-name"
				},
				{
					"name": "city",
					"type": "AMAZON.US_CITY"
				}
			]
		},
		{
			"name": "HobbyIntent",
			"phrases": [
				"My hobby is {hobby}",
				"I like {hobby}"
			],
			"inputs": [
				{
					"name": "hobby",
					"type": "hobby"
				}
			]
		}
	],
	"inputTypes": [
		{
			"name": "hobby",
			"values": [
				{
					"value": "fishing"
				},
				{
					"value": "skating"
				},
				{
					"value": "playing golf"
				},
				{
					"value": "coding",
					"synonyms": [
						"hacking",
						"programming"
					]
				}
			]
		}
	],
	"alexa": {
		"interactionModel": {
			"languageModel": {
				"intents": [
					{
						"name": "AMAZON.CancelIntent",
						"samples": []
					},
					{
						"name": "AMAZON.HelpIntent",
						"samples": []
					},
					{
						"name": "AMAZON.StopIntent",
						"samples": []
					}
				]
			}
		}
	}
}
```
Generates the Alexa interaction model in file [/platforms/alexaSkill/models/en-US.json](https://github.com/aswetlow/jovo-cli-v1-examples/blob/master/example2/platforms/alexaSkill/models/en-US.json)