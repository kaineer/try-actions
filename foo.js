const {readFile} = require('fs');
const {join} = require('path');

readFile(join(process.env.PATH, 'files.json'), (err, buffer) => {
  const text = buffer.toString();
  const data = JSON.parse(text);

  console.log(
    data.map((s) => ` * ${s}`).join(`\n`)
  );
});
