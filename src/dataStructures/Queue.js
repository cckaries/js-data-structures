class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() { // T: O(1)
    return this.first;
  }

  enqueue(value) { // T: O(1)
    const node = new Node(value);

    if(!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  dequeue() { // T: O(1)
    if(!this.first) {
      return null;
    }

    if(this.first === this.last) {
      this.last = null;
    }

    const leader = this.first;
    this.first = this.first.next;
    this.length--;
    return leader;
  }
}

const myQueue = new Queue();
myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.enqueue('C');
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue.peek());
