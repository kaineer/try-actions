// foo.js

const {readFile} = require('fs');
const {join} = require('path');

readFile(join(process.env.HOME, 'files.json'), (err, buffer) => {
  if (err) {
    throw err;
  } else {
    const text = buffer.toString();
    const data = JSON.parse(text);

    console.log(
      data.map((s) => ` * ${s}`).join(`\n`)
    );
  }
});
