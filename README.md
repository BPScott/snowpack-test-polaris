# Demonstrating a bug in snowpack

`@shopify/polaris` is a package that contains a json import from another package.

It looks like this:

```js
import DefaultThemeColors from '@shopify/polaris-tokens/dist-modern/theme/base.json';
```

Importing and using `@shopify/polaris` in snowpack 3.0.13 works great.

However in Snowpack 3.1.0-pre.8 it throws an error. It seems that within packages,
proxies for json files are not being used. This works if you try and import the json from app code, it only failes when you import a package that then imports a json file.

Admittedly this is a little funky as JSON modules have not been standardized just yet but considering bundlers and snowpack 3.0.x understood this format and importing the json file from within app code works it seems suprising that it fails when adding the indirection of an extra package.

### To test

- Clone this repo
- `npm install` to install dependencies
- `npm start` to run and open the server
- When viewing the site in your browser note the site does not render and you get the following error when running nowpack 3.1.0-pre.8, as it tries to load `http://localhost:8080/_snowpack/pkg/@shopify.polaris-tokens.dist-modern.theme.base.v2.20.0.json`

  ```
  Failed to load module script: The server responded with a non-JavaScript MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
  ```

### Expected Behaviour

Page loads sucessfully