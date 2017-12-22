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