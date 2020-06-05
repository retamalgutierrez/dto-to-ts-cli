# C# models to TypeScript

This is a soft fork of [James Loyd's](https://github.com/JamesLoyd/) [csharp-models-to-typescript-enhanced](https://www.npmjs.com/package/csharp-models-to-typescript-enhanced) npm package.
The main difference is that we change according angular coding style

## Dependencies

* [.NET Core SDK](https://www.microsoft.com/net/download/macos)


## Install

```
$ npm install --save dto-to-ts-cli
```

## How to use

1. Add a config file to your project that contains for example...

```
{
    "include": [
        "./models/**/*.cs",
        "./enums/**/*.cs"
    ],
    "exclude": [
        "./models/foo/bar.cs"
    ],
    "namespace": "Api",
    "output": "./models",
    "camelCase": false,
    "camelCaseEnums": false,
    "numericEnums": false,
    "stringLiteralTypesInsteadOfEnums": false,
    "customTypeTranslations": {
        "ProductName": "string",
        "ProductNumber": "string"
    }
}
```

2. Add a npm script to your package.json that references your config file...

```
"scripts": {
    "generate-types": "node node_modules\\dto-to-ts-cli\\index.js --config=your-config-file.json"
},
```

3. Run the npm script `generate-types` and the output file specified in your config should be created and populated with your models.


## License

MIT © [Jonathan Persson](https://github.com/jonathanp), Armstrong DevTeam
