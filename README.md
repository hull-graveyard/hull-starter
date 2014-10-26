# Hull Ship starter

## The Hull Manifest

The Ship Manifest is a manifest format describing Hull ships.
It defines :

  * Where the ship's assets can be found
  * A default layout (index liquid file)
  * Information to register the Ship in the gallery
  * Describes the configurable `settings` (with a schema to generate the "Customize" admin)
  * Describes the required attached resources, their format (schema) and default values
  * Lists available locales
  * Describes reporting dashboard
  * Describes default users segments

**example**

    {
      "name" : "hull-ship-starter",
      "version" : "0.0.1", // semver
      "description" : "A Very minimal Ship for hull.io",
      "index" : "index.liquid.html",
      "settings" : [
        {
          "name" : "background_color",
          "type" : "string",
          "title" : "Background Color",
          "format" : "color",
          "default" : "#ffffff"
        },
        {
          "name" : "text_color",
          "type" : "string",
          "title" : "Text Color",
          "format" : "color",
          "default" : "#ff0000"
        },
        {
          "name" : "brand_image",
          "type" : "string",
          "title" : "Brand Image",
          "format" : "image"
        }
      ],
      "resources" : [
        { "name" : "form", "type" : "form" }
      ],
      "locales" : ["en"]
    }


## Index

The `index` key of the manifest points to an html template (using liquid markup) the hull will fetch and serve at the following address :

    https://<organization-namespace>.hullapp.io/ships/<ship-key>

The `index` key MUST reference a URL relative to the manifest's url

For example, if your manifest is available at `https://my-awesome-ship.example.com/path/to/manifest.json`, and your index file is referenced as "index.liquid.html", Hull will fetch it here :

    https://my-awesome-ship.example.com/path/to/index.liquid.html


## Settings

Optional settings can be described in the manifest.
You can use settings to make reusable and configurable ships.

The manifest's settings are described as a [JSON-SCHEMA](http://spacetelescope.github.io/understanding-json-schema/) object.

### Settings fields

All settings entries MUST have a `name` and a `type`.

Fields can also have a default value and a description.


### Available settings formats

### String

    {
      "name" : "title",
      "description" : "Main title",
      "type" : "string",
      "default" : "Hello"
    }


### Color

    {
      "name" : "background_color",
      "type" : "string",
      "format" : "color",
      "default" : "#fffFFF"
    }


### Image

    {
      "name" : "logo",
      "type" : "string",
      "format" : "image",
      "default" : "http://url.to/logo.png"
    }

### Enums

    {
      "name" : "position",
      "type" : "string",
      "enum" : ["top", "bottom", "left", "right"],
      "default" : "top"
    }

### Booleans

    {
      "name" : "happy",
      "type" : "boolean",
      "default" : true
    }

### Numbers

    {
      "name" : "points",
      "type" : "number",
      "default" : 32
    }


## Resources

The manifest can also list the required resources for your ship.

Available resource types :

- `form`
- `quiz`
- `instant_win`

## Locales / Translations

Ships `translations` are a way to expose customizable strings in your app.
Hull will automatically fetch the available strings listed as "locales" in the Ship's manifest.

Translations are just simple JSON encoded Objects representing the Key and values for those customizable strings. Hull will try to fetch them from the following URL schema :

    http://ship.source.url/locales/:locale.json

For example on a ship located at `https://my-awesome-ship.example.com/`, and listing `en` and `fr` as available locales, Hull will fetch the translations at:

`https://my-awesome-ship.example.com/locales/en.json`

and

`https://my-awesome-ship.example.com/locales/fr.json`









