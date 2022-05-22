/* 
  Implement with linked list vs array

  Stack
  - pros: more dynamic memory usage
  - cons: extra memory space required

  Array
  - pros: cache locality makes synthetically faster, no extra space required
  - cons: need to double the memory if exceeds original space

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() { // T: O(1)
    return this.top;
  }

  push(value) { // T: O(1)
    const node = new Node(value);

    if(!this.length) {
      this.top = node;
      this.bottom = node;
    } else {
      const leader = this.top;
      this.top = node;
      this.top.next = leader;
    }

    this.length++;
    return this;
  }

  pop() { // T: O(1)
    if(!this.top) {
      return null;
    }

    if(this.top === this.bottom) {
      this.bottom = null;
    }

    const leader = this.top;
    this.top = this.top.next;
    this.length--;
    return leader;
  }
}

class StackWithArray {
  constructor() {
    this.array = [];
  }

  peek() { // T: O(1)
    return this.array[this.array.length - 1];
  }

  push(value) { // T: O(1)
    this.array.push(value);
    return this;
  }

  pop() { // T: O(1)
    return this.array.pop();
  }
}

/* use cases */

const myStack = new StackWithLinkedList();
myStack.push('google');
myStack.push('apple');
myStack.push('microsoft');
console.log(myStack.peek());
myStack.pop();
console.log(myStack);
myStack.pop();
myStack.pop();
console.log(myStack);