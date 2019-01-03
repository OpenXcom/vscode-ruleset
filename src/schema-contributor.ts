// Interface for interacting with YAML extension
export interface SchemaContributor {
    readonly registerContributor: (schema: string,
        requestSchema: (resource: string) => string,
        requestSchemaContent: (uri: string) => string) => void;
}