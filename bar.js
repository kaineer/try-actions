// bar.js

const {exec} = require('child_process');

exec('ls -1', (err, stdout) => {
  const text = stdout.toString();
  const lines = text.split('\n').filter(s => s.trim().length > 0);

  console.log(lines.map(s => ` * ${s}`).join('\n'));
});
