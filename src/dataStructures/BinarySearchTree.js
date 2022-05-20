class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) { // T: O(log n)
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) { // left
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) { // right
            currentNode.right = node;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  lookup(value) { // T: O(log n)
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while(currentNode) {
      if(value === currentNode.value) {
        return currentNode;
      }

      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value) { // T: O(log n)
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) { // move currentNode to its left child
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) { // move currentNode to its right child
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else { // if value === currentNode.value
        if (!currentNode.right) { // 1. if no right child of currentNode
          if(!parentNode) { 
            this.root = currentNode.left;
          } else {
            if(currentNode.value < parentNode.value) { // 
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
          }
        } else if (!currentNode.right.left) { // 2. if no left child of currentNode.right
          currentNode.right.left = currentNode.left;
          
          if(!parentNode) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }
        } else { // 3. currentNode.right has left child
          // find the leftmost child of currentNode.right
          let leftmostParentNode = currentNode.right;
          let leftmostNode = currentNode.right.left;

          while (leftmostNode.left) {
            leftmostParentNode = leftmostNode;
            leftmostNode = leftmostNode.left;
          }

          // make leftmostParentNode's left subtree of the as the leftmostNode's right subtree
          leftmostParentNode.left = leftmostNode.right;
          leftmostNode.left = currentNode.left;
          leftmostNode.right = currentNode.right;

          if (!parentNode) {
            this.root = leftmostNode;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

/* use cases */

const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
console.log(JSON.stringify(traverse(myTree.root)));
console.log(myTree.lookup(170));
console.log(myTree.lookup(30));
myTree.remove(170);
console.log(JSON.stringify(traverse(myTree.root)));
