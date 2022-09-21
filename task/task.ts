import * as T from 'fp-ts/lib/Task';
interface Task<A> {
  (): Promise<A>;
}

// Another way to define task is using a function type definition.
// type Task<A> = () => Promise<A>;

async function someTask(id: string) {
  if (id.length > 36) {
    throw new Error('id is too long');
  }
  //some async work
}

const boolTask: T.Task<boolean> = async () => {
  try {
    await someTask('abc');
    console.log(true);
    return true;
  } catch (error) {
    console.log(false);
    return false;
  }
};

boolTask(); //true

// ### Constructors ###

const foo = 'abc'; //string
const bar = T.of(foo); //T.Task<string>


const abc: T.Task<string> = () => Promise.resolve(foo);
