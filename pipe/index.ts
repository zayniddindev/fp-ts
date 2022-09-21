import { flow, pipe } from 'fp-ts/lib/function';

function add1(num: number): number {
  return num + 1;
}

function multiply2(num: number): number {
  return num * 2;
}

function toString(n: number): string {
  return n.toString();
}

console.log(pipe(1, add1, multiply2, toString)); //4
console.log(pipe(1, flow(add1, multiply2, toString))); //4
console.log(flow(add1, multiply2, toString)(1)); //4
