import * as vscode from "vscode";
import { join, extname } from "path";
import { SchemaContributor } from "./schema-contributor";

export class RulesetContributor {
    private _oxcSchema: string;
    private _oxceSchema: string;

    public constructor(root: string) {
        this._oxcSchema = this.getSchema(root, "oxc");
        this._oxceSchema = this.getSchema(root, "oxce");
    }

    private getSchema(root: string, version: string): string {
        const path = join(root, "./schemas/" + version + "/ruleset.json");
        return vscode.Uri.file(path).toString();
    }

    public register(schema: SchemaContributor) {
        schema.registerContributor("openxcom", res => this.request(res), () => "");
    }

    public request(resource: string): string {
        if (extname(resource) === ".rul") {
            const validator = vscode.workspace.getConfiguration().get('openxcom.ruleset.validator');
            switch (validator) {
                case "oxc":
                    return this._oxcSchema;
                case "oxce":
                    return this._oxceSchema;
            }
        }
        return "";
    }
}