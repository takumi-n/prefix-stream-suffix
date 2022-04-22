import { Transform } from 'stream';

type Options = {
  prefix?: string;
  suffix?: string;
};

export function prefixStreamSuffix(opt: Options): Transform {
  let isFirstChunk = true;

  return new Transform({
    transform(chunk, _, callback) {
      if (typeof opt.prefix !== 'undefined' && isFirstChunk) {
        isFirstChunk = false;
        this.push(opt.prefix + chunk);
      } else {
        this.push(chunk);
      }

      callback();
    },
    final(callback) {
      if (typeof opt.suffix !== 'undefined') {
        this.push(opt.suffix);
      }
      callback();
    },
  });
}
