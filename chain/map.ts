import { option as O } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { None, Some } from 'fp-ts/lib/Option';

type Option<A> = None | Some<A>;

interface Foo {
  bar: string;
}

const foo = {
  bar: 'Hello',
} as Foo | undefined;

pipe(foo, (f) => f?.bar); //foo is possibly undefined using optional chaining.

pipe(foo, ({ bar }) => bar); //Property 'bar' does not exist on type 'Foo | undefined'.ts(2339)

console.log(
  pipe(
    foo,
    O.fromNullable,
    O.map(({ bar }) => bar)
  )
);

console.log(
  pipe(
    undefined,
    O.fromNullable,
    O.map(({ bar }) => bar)
  )
);
