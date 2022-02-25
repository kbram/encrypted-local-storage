# encrypted-local-storage

Simply use aes encrypted cookie 

## framework support

- React JS _(no dependencies)_
- Angular JS _(no dependencies)_
- Node JS _(no dependencies)_
- pure JavaScript _(no dependencies)_

## Get started
## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Using npm:

```bash
$ npm i encrypted-local-storage
```

Using yarn:

```bash
$ yarn add encrypted-local-storage
```

## Features

  * AES-unlimited encryption local storage service without key
  * AES-unlimited decryption local storage service without key
  * AES-unlimited encryption local storage service  with key
  * AES-unlimited decryption local storage service  with key
  * well secure AES Encryption


------

## Usage

```js
import LocalStorageService from "encrypted-local-storage";

//WithoutKey

LocalStorageService.setItem("userName", "Bavaram"); //set Cookie  (key,value)
LocalStorageService.getItem("userName"); //get Cookie (key)


//WithKey
// Note: secretKey can be unlimited letters

LocalStorageService.setItem("userName", "Bavaram","passCode"); //set Cookie  (key,value,encrypt_key)
LocalStorageService.getItem("userName","passCode"); //get Cookie (key,encrypt_key)

 
```


## Browser Support

Native support

- Chrome
- Safari
- FireFox
- Opera
- Internet Explorer 9+

Support for Internet Explorer 7 and 8 with [excanvas](https://code.google.com/p/explorercanvas/wiki/Instructions) polyfill.

## License

[MIT](LICENSE)


> Developed by Karunaaharan Bavaram

## Copyright

Copyright (c) 2022 Karunaaharan Bavaram, contributors. Released under the MIT licenses

