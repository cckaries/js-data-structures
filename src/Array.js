class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) { // T: O(1)
    return this.data[index];
  }

  push(item) { // T: O(1)
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() { // T: O(1)
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) { // T: O(n)
    const item = this.data[index];
    this.shift(index);
    return item;
  }

  shift(index = 0) { // T: O(n)
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}


/* use cases */
 
const myArray = new Array();
console.log(myArray);
console.log(myArray.get(0));

myArray.push('Hello');
myArray.push(123);
console.log(myArray);
console.log(myArray.get(0));
console.log(myArray.get(1));

myArray.push('LAST');
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.push('THERE');
console.log(myArray);
myArray.delete(1);
myArray.shift();
console.log(myArray);