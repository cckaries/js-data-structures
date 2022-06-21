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

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (!currentNode.right) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
          }
        } else if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left;

          if (!parentNode) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          let leftmostParentNode = currentNode.right;
          let leftmostNode = currentNode.right.left;

          while (leftmostNode.left) {
            leftmostParentNode = leftmostNode;
            leftmostNode = leftmostNode.left;
          }

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

  dfsPreOrder() {
    return traversePreOrder(this.root, []);
  }

  dfsInOrder() {
    return traverseInOrder(this.root, []);
  }

  dfsPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traversePreOrder(node, list = []) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traverseInOrder(node, list = []) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list = []) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
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

console.log('DFS pre-order', myTree.dfsPreOrder());
console.log('DFS in-order', myTree.dfsInOrder());
console.log('DFS post-order', myTree.dfsPostOrder());
