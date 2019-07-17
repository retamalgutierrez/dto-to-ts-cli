# C# models to TypeScript

This is a soft fork of [Jonathan Persson's](https://github.com/jonathanp) [csharp-models-to-typescript](https://www.npmjs.com/package/csharp-models-to-typescript) npm package.
The main difference is that we do auto import of dependent classes and interfaces in csharp classes.
In order to facilitate this, you are required to append your types with "Model".


For example
```csharp
public class MyExampleModel: IExample
{
    public SomePropClass SomeValue {get; set; }
}
```
is translated into
```typescript
import {IExample} from "./IExample"
import { SomePropClass } from "./SomePropClass";

export interface MyExampleModel extends IExample {
    SomeValue: SomePropClass;
}
```


## Dependencies

* [.NET Core SDK](https://www.microsoft.com/net/download/macos)


## Install

```
$ npm install --save csharp-models-to-typescript-enhance
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
    "generate-types": "csharp-models-to-typescript-enhanced --config=your-config-file.json"
},
```

3. Run the npm script `generate-types` and the output file specified in your config should be created and populated with your models.


## License

MIT © [Jonathan Persson](https://github.com/jonathanp), Armstrong DevTeam