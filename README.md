[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/openxcom.ruleset-tools?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=openxcom.ruleset-tools)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/openxcom.ruleset-tools?style=for-the-badge&logo=microsoft)](https://marketplace.visualstudio.com/items?itemName=openxcom.ruleset-tools)
[![License](https://img.shields.io/github/license/OpenXcom/vscode-ruleset?style=for-the-badge)](https://github.com/OpenXcom/vscode-ruleset/blob/master/LICENSE)

# Ruleset Tools for Visual Studio Code

This extension adds support for OpenXcom [rulesets](https://www.ufopaedia.org/index.php/Rulesets_(OpenXcom)) to Visual Studio Code for a better editing experience. Powered by [vscode-yaml](https://github.com/redhat-developer/vscode-yaml).

![demo](images/demo.gif)

## Features

* Registers `*.rul` as YAML files, enabling syntax highlighting and validation.
* Validates the names and datatypes of all ruleset properties via [JSON schemas](https://json-schema.org/).
* Supports autocompletion.
* Supports OpenXcom Extended.

## Future Ideas

* Validate logic errors in ruleset properties.
* Autocompletion and validation of complex datatypes (eg. string IDs).
* Common ruleset snippets.
* Outline by element IDs.
* Support for other filetypes.
