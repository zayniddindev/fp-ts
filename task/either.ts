import { flow, identity, pipe } from 'fp-ts/lib/function';
import * as Password from './pasword';
import crypto from 'crypto';
import * as E from 'fp-ts/lib/Either';

const pipeline = flow(
  Password.of,
  Password.validate({ minLength: 8, capitalLetterRequired: true }),
  E.map(
    Password.hash((value) =>
      crypto.createHash('md5').update(value).digest('hex')
    )
  )
);

console.log(pipe('Pas123', pipeline));

// console.log(
//   Password.validate({ minLength: 5, capitalLetterRequired: true })({
//     _tag: 'Password',
//     isHashed: false,
//     value: 'Abcde',
//   })
// );
