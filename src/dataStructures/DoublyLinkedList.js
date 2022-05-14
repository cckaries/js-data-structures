class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) { // T: O(1)
    const node = new Node(value);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.print();
  }

  prepend(value) { // T: O(1)
    const node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this.print();
  }

  insert(index = 0, value) { // T: O(n)
    if(index === 0) {
      this.prepend(value);
      return this.print();
    }

    if(index >= this.length) {
      return this.append(value);
    }

    const node = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = node;
    node.next = follower;
    node.prev = leader;
    follower.prev = node;
    this.length++;
    return this.print();
  }

  delete(index) { // T: O(n)
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return this.print();
  }

  traverseToIndex(index) { // T: O(n)
    let counter = 0;
    let currNode = this.head;
    while(counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  print() { // T: O(n)
    const res = [];
    let currNode = this.head;
    while(currNode !== null) {
      res.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(res);
    return res;
  }
}

/* use cases */

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
myLinkedList.delete(1);