const { prefixStreamSuffix } = require('prefix-stream-suffix');
const { Readable } = require('stream');

async function main() {
  let data = '';
  for await (const chunk of Readable.from('content').pipe(
    prefixStreamSuffix({ prefix: '[pre]', suffix: '[suf]' })
  )) {
    data += chunk.toString();
  }

  console.log(data);
}

main();
