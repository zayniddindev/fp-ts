import { Eq } from 'fp-ts/Eq';
import { fromCompare } from 'fp-ts/lib/Ord';

type Ordering = -1 | 0 | 1;

interface Ord<A> extends Eq<A> {
  readonly compare: (x: A, y: A) => Ordering;
}

const ordNumber: Ord<number> = {
  equals: (x, y) => x == y,
  compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0),
};

const ordNumber1: Ord<number> = fromCompare((x, y) =>
  x < y ? -1 : x > y ? 1 : 0
);

function min<A>(O: Ord<A>): (x: A, y: A) => A {
  return (x, y) => (O.compare(x, y) === 1 ? y : x);
}
min(ordNumber)(2, 1); //

type User = {
  name: string;
  age: number;
};

const byAge: Ord<User> = fromCompare((x, y) => ordNumber.compare(x.age, y.age));
console.log(byAge.compare({ name: '', age: 11 }, { name: '', age: 2 }));
