Ship
====

## Structure

```
minimal
├── ship.html
├── ship.js
├── locales
│   └── en.json
└── manifest.json
```

### `ship.html`

The file that will be injected in the website where the ship is deployed.

This is the place where you import your assets.

- https://github.com/hull-ships/hull-comments-count/blob/master/manifest.json#L5
- https://github.com/hull-ships/hull-comments-count/blob/master/src/ship.html


### `ship.js`

Your ship code, this is where the magic happen. It should call the Hull.onEmbed method.

```
Hull.onEmbed(document, function(element, deployment) {  
  // The DOM element where your ship is injected. 
  element.innerHTML = 'I am a Ship';
});
```

#### `deployment`

`deployment` is an object that contains contextual information about the ship deployment.

- **`ship`**, The instance of your ship. This is where the settings that you defined in `manifest.settings` are.
- **`platform`**, The current Hull Platform.
- **`settings`** ,  This is where the settings that you defined in `manifest.deployment_settings` are.
- **`organization`**, The current Hull Organization.

### `locales`

The folder where your locales are.

#### locale file

Locale file a a JSON file, that contains the string that will be editable in the Wording section of the Hull dashboard.

```
{
  "zero_comment": "No comment",
  "one_comment": "One comment",
  "more_comment": "{count} comments"
}
```

#### `manifest.json`

A JSON file that describe your ship.

## Manifest

The manifest is a json file that describe a ship. It allows us to generate admin interfaces.

- [Minimal manifest](https://github.com/hull-ships/hull-comments-count/blob/master/manifest.json)
- [Login Dialog Manifest](https://github.com/hull-ships/hull-login/blob/master/manifest.json)

### `name`

required `String`.

A name for the ship. Used for the registry.

### `description`

optional `String`.

A description for the ship. Used for the registry.

### `picture`

optional `String`.

A relative path to a picture for the ship. Used for the registry.

### `version` - `String`

required `String`.

The version of your ship.

### `locales`

optional `Array`.

List of supported locales for your ship. locale file should be stored in the `locales` folder.

### `resources`

optional `Array`.

Define what are that required `resources` for the ship. A resource can be a form `form`, a `quiz` or an `instant_win`.

### `index`

required `String`.

A relative path to the file that will be injected in the website where the ship is deployed.

### `settings`

optional `Array`.

Settings that can be edited in the ship section.

### `deployment_settings`

optional `Array`.

Same as `settings`, but those settings are scoped to a deployment and not a ship instance. Those can be edited in the platform/deployment section of the Hull dashboard.


## Available settings

Used to describe `settings` and `deployment_settings`.

### `string`

```
{
  "name" : "title",
  "description" : "Main title",
  "type" : "string",
  "default" : "Hello"
}
```


### `color`

```
{
  "name" : "background_color",
  "type" : "string",
  "format" : "color",
  "default" : "#fffFFF"
}
```


### `image`

```
{
  "name" : "logo",
  "type" : "string",
  "format" : "image"
}
```

### `enums`

```
{
  "name" : "position",
  "type" : "string",
  "enum" : ["top", "bottom", "left", "right"],
  "default" : "top"
}
```

### `boolean`

```
{
  "name" : "is_happy",
  "type" : "boolean",
  "default" : true
}
```

### `number`

```
{
  "name" : "points",
  "type" : "number",
  "default" : 32
}
```