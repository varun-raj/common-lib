# CommonLib 
------
### Installation
```
npm install --save common-lib
```
### Usage
```
var CommonLib = require('common-lib');
CommonLib.functionName();
```
### List of currently available functions
##### For getting the index of an element from an array.
`getElementIndex(element, array);`
##### For converting file size to human readable format.
`humanFileSize(bytes,decimals);`
##### For converting one digit to two.
`makeTwoDigit(number);`
##### For converting an associative array to index array.
`convertToIndexArray(hash_array);`
##### For getting value of a url params.
`getURLParameter(param_name);`
##### For getting the first letter of a string.
`getFirstLetter(str);`
##### For converting the bitrate to a readble format
`formatebitrate(bits);`

### Contribution.
* Fork the repo.
* Add your functions to the `index.js` file.
* Create a pull request with a proper note about the function.

