import { pipe } from 'fp-ts/lib/function';
import { None, Some } from 'fp-ts/lib/Option';
import { option as O } from 'fp-ts';

type Option<A> = None | Some<A>;

interface Fizz {
  buzz: string;
}
interface Foo {
  bar?: Fizz;
}

const foo = { bar: undefined } as Foo | undefined;

console.log(pipe(foo, (f) => f?.bar?.buzz)); //undefined

// console.log(
//   pipe(
//     foo,
//     O.fromNullable,
//     O.map(({ bar: { buzz } }) => buzz)
//   )
// ); //Property 'buzz' does not exist on type 'Fizz | undefined'.ts(2339)

console.log(
  pipe(
    foo,
    O.fromNullable,
    O.map(({ bar }) =>
      pipe(
        bar,
        O.fromNullable,
        O.map(({ buzz }) => buzz)
      )
    )
  )
); //{ _tag: 'Some', value: { _tag: 'None' } }
