import { prefixStreamSuffix } from '../index';
import { Readable } from 'stream';

describe('prefixStreamSuffix', () => {
  it('prepends the prefix to a stream', async () => {
    let data = '';
    for await (const chunk of Readable.from('content').pipe(
      prefixStreamSuffix({ prefix: '[prefix]' })
    )) {
      data += chunk.toString();
    }

    expect(data).toBe('[prefix]content');
  });

  it('appends the suffix to a stream', async () => {
    let data = '';
    for await (const chunk of Readable.from('content').pipe(
      prefixStreamSuffix({ suffix: '[suffix]' })
    )) {
      data += chunk.toString();
    }

    expect(data).toBe('content[suffix]');
  });

  it('dose nothing if no options are given', async () => {
    let data = '';
    for await (const chunk of Readable.from('content').pipe(
      prefixStreamSuffix({})
    )) {
      data += chunk.toString();
    }

    expect(data).toBe('content');
  });
});
