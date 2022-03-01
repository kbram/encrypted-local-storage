<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/kbram/encrypted-local-storage">
    <img src="https://github.com/kbram/files/blob/main/encryption-icon.png" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center">encrypted-local-storage</h3>

  <p align="center">
    Simply use aes encrypted Local storage
    <br />
    <a href="https://github.com/kbram/encrypted-local-storage"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kbram/encrypted-local-storage">View Demo</a>
    ·
    <a href="https://github.com/kbram/encrypted-local-storage/issues">Report Bug</a>
    ·
    <a href="https://github.com/kbram/encrypted-local-storage/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
   <li><a href="#about-project">About Project</a></li>
   <li><a href="#built-With">Built With</a></li>
   <li><a href="#features">Features</a></li>
   <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usages</a></li>
    <li><a href="#note">Note</a></li>
    <li><a href="#browser-support">Browser Support</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- PROJECT FEATHERS -->
## About Project

This is fully secure cookies with AES Encryption. You can store encrypted cookie. This is specially you can use unlimited length key and store unlimited length of string value in cookie. Encrypt Json array also storable. It's have default key value and you can change own key value to store.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

* 100% [JavaScript](https://www.javascript.com/)


<p align="right">(<a href="#top">back to top</a>)</p>

## Features

  * AES-unlimited encryption local storage service without key
  * AES-unlimited decryption local storage service without key
  * AES-unlimited encryption local storage service  with key
  * AES-unlimited decryption local storage service  with key
  * well secure AES Encryption
  * You can store string array


<p align="right">(<a href="#top">back to top</a>)</p>

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

<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

```js
import LocalStorageService from "encrypted-local-storage";

//WithoutKey

LocalStorageService.setItem("userName", "Bavaram"); //set Local storage  (key,value)
LocalStorageService.getItem("userName"); //get Local storage (key)


//WithKey
// Note: secretKey can be unlimited letters

LocalStorageService.setItem("userName", "Bavaram","passCode"); //set Local storage  (key,value,encrypt_key)
LocalStorageService.getItem("userName","passCode"); //get Local storage (key,encrypt_key)

 
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Note
```js
LocalStorageService.getItem() //=>returns  value string
// (If encrypted key is wrong => "")
// (Local storage is not available   => ")

```
<p align="right">(<a href="#top">back to top</a>)</p>

## Browser Support

Native support

- Chrome
- Safari
- FireFox

<p align="right">(<a href="#top">back to top</a>)</p>


## License

  [MIT](LICENSE)


>
> Developed by [`Karunaaharan Bavaram`](https://www.bavaram.info)

<p align="right">(<a href="#top">back to top</a>)</p>

## Copyright

Copyright (c) 2022 [`Karunaaharan Bavaram`](https://www.bavaram.info), contributors. Released under the MIT, GPL licenses

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/kbram/encrypted-local-storage.svg?style=for-the-badge
[contributors-url]: https://github.com/kbram/encrypted-local-storage/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kbram/encrypted-local-storage.svg?style=for-the-badge
[forks-url]: https://github.com/kbram/encrypted-local-storage/network/members
[stars-shield]: https://img.shields.io/github/stars/kbram/encrypted-local-storage.svg?style=for-the-badge
[stars-url]: https://github.com/kbram/encrypted-local-storage/stargazers
[issues-shield]: https://img.shields.io/github/issues/kbram/encrypted-local-storage.svg?style=for-the-badge
[issues-url]: https://github.com/kbram/encrypted-local-storage/issues
[license-shield]: https://img.shields.io/github/license/kbram/encrypted-local-storage.svg?style=for-the-badge
[license-url]: https://github.com/kbram/encrypted-local-storage/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bavaram
