// //* Array Implementation

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   //* O(1)
//   enqueue(value) {
//     this.items.push(value);
//   }

//   //* O(n)
//   dequeue() {
//     if (this.isEmpty()) {
//       return undefined;
//     }

//     return this.items.shift();
//   }

//   //* O(1)
//   peek() {
//     if (this.isEmpty()) {
//       return undefined;
//     }

//     return this.items[0];
//   }

//   //* O(1)
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   //* O(n)
//   print() {
//     console.log("Start -> ", this.items.join(" -> "), " -> end");
//   }
// }

// const queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();

// queue.dequeue();
// queue.print();


class Queue {
  constructor () {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value); 
  }

  dequeue() {
    if(this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  peek() {
    console.log(this.items[0]);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.join(' <- '));
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

queue.dequeue();
queue.print();

queue.peek();