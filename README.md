# empty-directory
A node.js module for empty a directory

[![NPM](https://nodei.co/npm/empty-directory.png)](https://nodei.co/npm/empty-directory/)

[![npm version](https://badge.fury.io/js/empty-directory.svg)](https://badge.fury.io/js/empty-directory)

## Install

```sh
$ npm install empty-directory
```

## Example with callback
```
  const emptyDirectory = require('empty-directory');
  
  emptyDirectory('/path/to/directory', (err, files) => {
    if (err) { return console.log('error: ', err) }
    console.log('Deleted files: ', files);
  })
```

## Example with promise
```
  const emptyDirectory = require('empty-directory');
  
  
emptyDirectory('/path/to/directory')                                                                   
    .then(files => console.log('Deleted files:', files))                                 
    .catch(err => console.log('error:', err));
```

## Example with a filter
```
const options = { filter: filename => filename == 'a' }                                  
                                                                                         
emptyDirectory('/path/to/directory', options)                                                          
    .then(files => console.log('Deleted files:', files))                                 
    .catch(err => console.log('error:', err)); 
```
