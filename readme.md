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
<br/>
Initializes platform specific folders in the project directory.

**--locale [en-US]** - Default: en-US
Locale of the skill. Creates an empty i18n file and the the language model.


### Example

```sh
$ jovo new example1
```
Creates simple project without the the platform specific folder structure.