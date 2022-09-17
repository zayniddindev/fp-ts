interface Eq<A> {
  readonly equals: (x: A, y: A) => boolean;
}
const eqNumber: Eq<number> = {
  equals: (x, y) => x === y,
};

console.log(eqNumber.equals(3, 3));
