// The module "vscode" contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { RulesetContributor } from "./ruleset-contributor";
import { SchemaContributor } from "./schema-contributor";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const yamlExt = vscode.extensions.getExtension<SchemaContributor>("redhat.vscode-yaml");
    if (yamlExt) {
        const ruleset = new RulesetContributor(context.extensionPath);
        yamlExt.activate().then(
            api => { ruleset.register(api); },
            err => { console.error(err); }
        );
    } else {
        console.error("YAML extension not found");
    }
}

// this method is called when your extension is deactivated
export function deactivate() { }
