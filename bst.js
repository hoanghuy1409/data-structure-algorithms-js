// BINARY SEARCH TREE

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;

    while (current) {
      if (current.data === data) {
        return true;
      } else {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }

      if (data === node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }

        if (node.left == null) {
          return node.right;
        }

        if (node.right == null) {
          return node.left;
        }

        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    return (this.root = removeNode(this.root, data));
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    var result = [];
    var Q = [];
    Q.push(this.root);

    if (this.root !== null) {
      while (Q.length > 0) {
        var node = Q.shift();

        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const treeA = new BST();

treeA.add(9);
treeA.add(4);
treeA.add(17);
treeA.add(3);
treeA.add(6);

treeA.add(22);
treeA.add(5);
treeA.add(7);
treeA.add(20);
treeA.add(10);

console.log(treeA.root);
console.log(treeA.findMin());
console.log(treeA.findMax());
console.log(treeA.find(8));

console.log(treeA.findMinHeight());
console.log(treeA.findMaxHeight());
console.log(treeA.isBalanced());
console.log(treeA.inOrder());
console.log(treeA.preOrder());
console.log(treeA.postOrder());
console.log(treeA.levelOrder());
