# async-sqlite3

# What is it?
async-sqlite3 is a node.js library that is designed to use promise and rejects to handle data rather than callback functions. I understand that the naming may be fairly confusing, because sqlite3 is asynchronous itself, but it only does async handling through callbacks. In total honesty, I created this module to publish to npm for personal use. I'm documenting it in the case that anyone runs across it and wants to understand how to use it.

# Why use it?
While callbacks can be useful, it's not when you're querying and need to push that data once the query is done. While it is possible with callbacks, you enter what is called "callback hell." This module is designed to assigned the returned data to the variable, once the query has ran to completion. I actually designed this module because I was attempting to return a json response of specific data from a table and ran into "callback hell" with actually inputting all of the data I needed.

# The function I need isn't here?
Feel free to add it. I only wrote functions that I've only ever found necessary. I understand that my needs may not apply to yours. To see how I do it, refer to `/build/src/index.js`. If you want the function added to the npm library, contact me and I'll consider adding it.

# An example?
```javascript
const sqlite3 = require('async-sqlite3');
const sql = new sqlite3();

async function start() {
    await sql.open("test.db");

    try { await sql.run("CREATE TABLE IF NOT EXISTS test(test TEXT)"); } catch(err) { console.log(err) }
}
```
You can find a file containing specific queries in `/build/examples/App.js`

# Installation
To install this package, just run `npm i async-sqlite3`
