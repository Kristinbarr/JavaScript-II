// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function funWithClosure () {
  let bears = 0
  return function() {
    bears += 1
    return `I have ${bears} gummy bears!`
  }
}

const secret = funWithClosure()
console.log(secret())
console.log(secret())
console.log(secret())

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked, increments and returns a counter variable.
  let count = 0
  return function() {
    count += 1
    console.log(count)
    return count
  }
};

const newCounter = counter()

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = (action) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0

  let obj = {
    increment() {
      counter += 1
      return counter
    },
    decrement() {
      counter -= 1
      return counter
    }
  }

  if (action === 'increment') {
    return obj.increment
  }
  if (action === 'decrement') {
    return obj.decrement
  }

};

const inc = counterFactory('increment')
const dec = counterFactory('decrement')
console.log(inc())
console.log(inc())
console.log(inc())
console.log(dec())
console.log(dec())
console.log(dec())
