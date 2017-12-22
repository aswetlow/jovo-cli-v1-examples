# JOVO-CLI Examples

**Prerequisites:**
<br/>
Installed ASK CLI 
[QuickStart](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

<br/>
### jovo new \<project>
Creates a new empty project based on the 'helloWorld' template in the folder <project>.
<br/>
<br/>

Command | Description | Docs
------------ | ------------- | -------------
`--platform [alexaSkill|googleAction|all|**none**]` | Initializes platform specific folders in the project directory | [📝](#bst-proxy)
`--watch` | Uses `nodemon` to monitor changes and automatically restart the server | [📝](#watch)


Options:

--platform [alexaSkill|googleAction|all|none] - Default: none
<br/>
Initializes platform specific folders in the project directory.

--template [helloWorld|audioplayer] - Default: helloWorld
Prepares logic and language model that are defined in the template.

--locale [en-US|en-GB|de-DE] - Default: en-US
Locale of the skill. Creates an empty i18n file and the the language model.

--invocation <invocation-phrase>
(Alexa only) Saves the invocation name in the configuration and starts creating Alexa Skill via ASK CLI
