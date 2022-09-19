import { getStructEq } from 'fp-ts/Eq';

interface Eq<A> {
  readonly equals: (x: A, y: A) => boolean;
}

//_____eqNumber()____//
const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};

eqNumber.equals(3, 3); //true

//**************************************************************** */

//______elem()_____//
function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
  return (a, as) => as.some((item) => E.equals(item, a));
}

elem(eqNumber)(1, [1, 2, 3]); //true

//**************************************************************** */

type Point = {
  x: number;
  y: number;
};

const eqPoint: Eq<Point> = {
  equals: (p1, p2) => p1 == p2 || (p1.x == p2.x && p1.y == p2.y),
};

const eqPoint1: Eq<Point> = getStructEq({
  x: eqNumber,
  y: eqNumber,
});

type Vector = {
  from: Point;
  to: Point;
};

const eqVector: Eq<Vector> = getStructEq({
  from: eqPoint,
  to: eqPoint,
});
